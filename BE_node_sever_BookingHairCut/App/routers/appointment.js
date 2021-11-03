var express = require('express'); 
var router = express.Router();

var appointmentController = require('../controllers/appointment');

router.get('/appointment/getappointmentPending',appointmentController.getpending);
// router.post('/login/test',loginController.checklogin);

module.exports = router;