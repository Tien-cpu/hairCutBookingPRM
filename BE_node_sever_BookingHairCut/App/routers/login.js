var express = require('express'); 
var router = express.Router();

var loginController = require('../controllers/login');

router.get('/login/checklogin',loginController.checklogin);
router.post('/login/test',loginController.checklogin);
router.post('/api/v1/admin/login/checklogin',loginController.checkloginadmin);
router.get('/api/v1/admin/login/checklogin',loginController.checkloginadmin);

module.exports = router;