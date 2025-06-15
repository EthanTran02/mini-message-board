const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

router.get('/', messagesController.getMessages);
router.post('/new', messagesController.addMessages)

module.exports = router;
