var express = require('express'); 
var router = express.Router();

var appointmentController = require('../controllers/salonowner');

router.get('/api/v1/admin/salonowner/:id',appointmentController.getsalondetailadmin);
router.get('/api/v1/admin/salonowner',appointmentController.getasevicecategory);
router.post('/api/v1/admin/salonowner',appointmentController.updatesalonowner);

// router.post('/login/test',loginController.checklogin);

module.exports = router;