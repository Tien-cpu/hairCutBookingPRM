var express = require('express'); 
var router = express.Router();

var loginController = require('../controllers/login');

router.get('/login/checklogin',loginController.checklogin);
router.post('/login/test',loginController.checklogin);

module.exports = router;