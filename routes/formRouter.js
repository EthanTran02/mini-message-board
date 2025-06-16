const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/', formController.getForm);

module.exports = router;
