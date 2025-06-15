const express = require('express');
const router = express.Router();
const newRouter = require('../controllers/newController');

router.get('/', newRouter.getNewForm);

module.exports = router;
