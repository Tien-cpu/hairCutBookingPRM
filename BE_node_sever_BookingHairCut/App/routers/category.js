var express = require('express'); 
var router = express.Router();

var categoruController = require('../controllers/category');

router.get('/category/getcategory',categoruController.getcategory);
// router.post('/login/test',loginController.checklogin);

module.exports = router;