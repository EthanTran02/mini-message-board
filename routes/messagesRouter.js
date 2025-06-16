const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

router.get('/', messagesController.getMessages);
router.get('/message/:id', messagesController.getDetailMessage);
router.post('/new', messagesController.addMessages);

module.exports = router;
