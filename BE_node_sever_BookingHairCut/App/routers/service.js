var express = require('express'); 
var router = express.Router();

var serviceController = require('../controllers/service');

router.get('/service/getservice',serviceController.getservice);
router.get('/service/getservice/:category',serviceController.getserviceGetcategory);
router.post('/service/getservice',serviceController.postservice);
router.get('/service/getserviceadmin/:id',serviceController.getserviceadmin);
router.get('/service/getserviceadmindetail/:id',serviceController.getaserviceadmindetail);
router.post('/service/getserviceadmin', serviceController.update);
router.post('/service/getserviceadmin/:id', serviceController.update);
// router.post('/login/test',loginController.checklogin);

module.exports = router;