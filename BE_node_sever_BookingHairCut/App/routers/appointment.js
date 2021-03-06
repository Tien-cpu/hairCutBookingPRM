var express = require('express'); 
var router = express.Router();

var appointmentController = require('../controllers/appointment');

router.get('/appointment/getappointmentPending',appointmentController.getpending);
router.get('/api/v1/admin/appointment',appointmentController.getadminApointment);
router.get('/api/v1/admin/appointment/:id',appointmentController.getapoinmentadmindetail);
router.post('/api/v1/admin/appointment',appointmentController.postCancelService);
router.post('/api/v1/user/appointment',appointmentController.postBookingService);
router.post('/api/v1/user/appointment/:id',appointmentController.CancelBookingService);
router.get('/api/v1/user/appointment/:id/:style',appointmentController.getapoinmentlistus);

// router.post('/login/test',loginController.checklogin);

module.exports = router;