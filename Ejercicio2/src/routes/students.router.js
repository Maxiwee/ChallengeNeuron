const { Router } = require('express');
const {
  createStudent,
  allStudents,
  foundStudent,
  orderByDate,
  updateStudent,
  addScoreStudent,
  mathScoreStudent,
} = require('../controllers/students.controller');
const router = Router();

router.post('/create', createStudent);

router.get('/', allStudents);

router.get('/order', orderByDate);

router.get('/math', mathScoreStudent);

router.put('/update', updateStudent);

router.get('/:id', foundStudent);

router.post('/score', addScoreStudent);

module.exports = router;
