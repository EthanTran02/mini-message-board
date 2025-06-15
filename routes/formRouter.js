const express = require('express');
const router = express.Router();
const formRouter = require('../controllers/formController');

router.get('/', formRouter.getForm);

module.exports = router;
