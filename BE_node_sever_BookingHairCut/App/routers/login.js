var express = require('express'); 
var router = express.Router();

var loginController = require('../controllers/login');

router.post('/api/v1/user/login/checklogin',loginController.checkloginuser);
router.post('/api/v1/user/login/regislogin',loginController.regisloginuser);
router.post('/api/v1/admin/login/checklogin',loginController.checkloginadmin);
router.get('/api/v1/admin/login/checklogin',loginController.checkloginadmin);

module.exports = router;