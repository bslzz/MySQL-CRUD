const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.route('/post').post(dataController.postData);

module.exports = router;
