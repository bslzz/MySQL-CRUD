const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.route('/post').post(dataController.postData);
router.route('/get').get(dataController.getData);

module.exports = router;
