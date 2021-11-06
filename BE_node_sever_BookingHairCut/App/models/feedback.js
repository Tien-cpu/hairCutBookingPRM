var Connection = require('../commons/connection');
const feedback = function(feedback) {
    this.id = feedback.id;
    this.name = feedback.name;
    this.icon = feedback.icon;
    this.status = feedback.status;
}
feedback.getfeedbackservice = function(id,result){
  let sql2 = "select f.id, u.name, f.content, f.rating  from feedbacksalon f left join usertbl u on f.cusid = u.id where f.serviceid = "+id;
  console.log(sql2);
  Connection.query(sql2, function(err, data){
      if(err){
          result(err);
          return;
      } else {
          result(data);
      }
  });
}
module.exports = feedback;