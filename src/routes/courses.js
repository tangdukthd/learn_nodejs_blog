const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.get('/:id/edit', CourseController.edit);
router.post('/store', CourseController.store);
router.put('/:id', CourseController.update);
router.delete('/:id', CourseController.delete);
router.get('/:slug', CourseController.show);

module.exports = router;
