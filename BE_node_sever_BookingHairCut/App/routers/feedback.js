var express = require('express'); 
var router = express.Router();

var feedbackController = require('../controllers/feedback');

router.get('/api/v1/admin/feedbackService/:id',feedbackController.getsalonfeedback);
// router.post('/login/test',loginController.checklogin);

module.exports = router;