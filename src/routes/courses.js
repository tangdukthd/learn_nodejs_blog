const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.get('/:id/edit', CourseController.edit);
router.post('/store', CourseController.store);
router.post('/handle-form-action', CourseController.handlerFormAction);
router.put('/:id', CourseController.update);
router.patch('/:id/restore', CourseController.restore);
router.delete('/:id', CourseController.delete);
router.delete('/:id/force', CourseController.forceDelete);
router.get('/:slug', CourseController.show);

module.exports = router;
