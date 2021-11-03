var http = require('http');
var express = require('express'); 
var cors = require('cors');
var app = express();
app.use(cors());
// const router = express.Router();
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

var loginRouter = require('./App/routers/login');
var categortRouter = require('./App/routers/category');
var serviceRouter = require('./App/routers/service');
var appointmentRouter = require('./App/routers/appointment');
var salonownerRouter = require('./App/routers/salonowner');
var feedbackRouter = require('./App/routers/feedback');

app.use('/',feedbackRouter)
app.use('/',salonownerRouter)
app.use('/',appointmentRouter)
app.use('/',loginRouter);
app.use('/',categortRouter);
app.use('/',serviceRouter);
app.listen(3000,function(){
    console.log("Server running on http://localhost:3000/");
});
