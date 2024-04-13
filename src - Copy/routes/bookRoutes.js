const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/createbook', bookController.createBook);
router.put('/updatebook/:id', bookController.updateBook);
router.delete('/deleteBook/:id', bookController.deleteBook);
router.get('/getbook', bookController.getAllBooks);

// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;