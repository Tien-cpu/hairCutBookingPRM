var express = require('express'); 
var router = express.Router();

var notificationsController = require('../controllers/notifications');

router.get('/api/v1/admin/getnotifications/:id',notificationsController.getnotificationuser);
router.post('/api/v1/admin/getnotifications/:id', notificationsController.getnotificationuser);
// router.post('/login/test',loginController.checklogin);

module.exports = router;