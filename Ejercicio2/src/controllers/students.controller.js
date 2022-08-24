const Student = require('../models/Student');
const Score = require('../models/Socre');
const { findById } = require('../models/Socre');

module.exports = {
  createStudent: async (req, res) => {
    const { name, lastname, dateOfBirth, group } = req.body;

    if (!name || !lastname || !dateOfBirth || !group) {
      return res.status(400).json({
        error: 'Please send your name, lastname, date of brith and group',
      });
    }

    try {
      const student = new Student(req.body);
      await student.save();
      res.status(200).json({ msg: 'Student created', student });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: '  ',
      });
    }
  },

  allStudents: async (req, res) => {
    const { group } = req.query;

    if (!group) {
      try {
        const students = await Student.find({});

        if (!students[0])
          return res.status(401).json({ msg: 'The list has no students' });

        res.status(200).json(students);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'The list has no students' });
      }
    } else {
      if (group !== 'A' && group !== 'B' && group !== 'C') {
        return res.status(400).send({ error: 'Please send a valid group ' });
      }

      try {
        const studentsgroup = await Student.find({ group: group });
        res.json(studentsgroup);
      } catch (error) {
        console.log(error);
      }
    }
  },

  foundStudent: async (req, res) => {
    const { id } = req.params;

    try {
      const student = await Student.findOne({ _id: id });
      if (!student) return res.status(401).json({ msg: 'Student not found' });
      res.status(200).json(student);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Student not found' });
    }
  },

  orderByDate: async (req, res) => {
    const { order } = req.query;
    let orderStudent;
    try {
      if (order === 'asc') {
        orderStudent = await Student.find().sort({ dateOfBirth: -1 });
      } else if (order === 'desc') {
        orderStudent = await Student.find().sort({ dateOfBirth: 1 });
      } else {
        orderStudent = await Student.find().sort({ dateOfBirth: -1 });
      }

      if (!orderStudent[0]) {
        return res.status(401).json({ msg: 'The list has no students' });
      }

      res.status(200).json(orderStudent);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'The list has no students' });
    }
  },

  updateStudent: async (req, res) => {
    const {
      id,
      name,
      lastname,
      dateOfBirth,
      group,
      english,
      spanish,
      mathematics,
      history,
    } = req.body;

    if (!id)
      return res
        .status(401)
        .json({ error: 'There is no reference to update the student (ID)' });

    if (
      !name &&
      !lastname &&
      !dateOfBirth &&
      !group &&
      !english &&
      !spanish &&
      !mathematics &&
      !history
    ) {
      return res.status(401).json({
        msg: 'Please send your score ',
      });
    }

    try {
      if (name || lastname || dateOfBirth || group) {
        await Student.findOneAndUpdate({ _id: id }, req.body);
      }
      if (english || spanish || mathematics || history) {
        await Score.findOneAndUpdate({ student: id }, req.body);
      }

      const studentUpdate = await Score.findOne({ student: id }).populate(
        'student'
      );

      res.status(200).json({ msg: 'Student Update', studentUpdate });
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ error: 'The student ID is incorrect, it does not exist.' });
    }
  },

  addScoreStudent: async (req, res) => {
    const { id } = req.query;
    const { english, spanish, mathematics, history } = req.body;

    if (!id) {
      return res
        .status(401)
        .json({ error: 'There is no reference to update the student (ID)' });
    }

    if (!english && !spanish && !mathematics && !history) {
      return res.status(401).json({
        error:
          'Please the scores of any of the subjects (english, epanish, mathematics or history)',
      });
    }

    for (const key in (obj = req.body)) {
      if (isNaN(obj[key])) {
        return res.status(400).json({ error: 'Scores are not numbers' });
      }
    }

    try {
      const student = await Student.findById({ _id: id });

      const studentfound = await Score.findOne({ student: id });
      if (studentfound)
        return res.status(401).json({
          error: 'The student already has scores, update',
          student: studentfound,
        });

      const scoreStudent = await new Score({
        student: student._id,
        english,
        spanish,
        mathematics,
        history,
      });

      await scoreStudent.save();

      const scoreUpdateStudent = await scoreStudent.populate('student');

      res.status(200).json(scoreUpdateStudent);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Unable to add student scores' });
    }
  },

  mathScoreMax: async (req, res) => {
    const scoreStudent = await Score.find().populate('student');

    let mathScoreMax = { mathematics: 0 };

    scoreStudent.forEach(x => {
      console.log(x.mathematics + ' ||' + mathScoreMax);

      if (Number(x.mathematics) > Number(mathScoreMax.mathematics)) {
        mathScoreMax = x;
      }
    });

    res.send(mathScoreMax);
  },
};
