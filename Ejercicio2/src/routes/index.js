const { Router } = require('express');
const router = Router();

const studentsRouter = require('./students.router.js');

router.use('/students', studentsRouter);

module.exports = router;
