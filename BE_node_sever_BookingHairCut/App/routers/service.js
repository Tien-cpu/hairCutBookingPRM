var express = require('express'); 
var router = express.Router();

var serviceController = require('../controllers/service');

router.get('/service/getservice',serviceController.getservice);
router.get('/service/getserviceadmin',serviceController.getserviceadmin);
router.get('/service/getserviceadmin/:id',serviceController.getaserviceadmin);
// router.post('/login/test',loginController.checklogin);

module.exports = router;