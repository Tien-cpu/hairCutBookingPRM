var Connection = require('../commons/connection');
const Notification = function(appointment) {
    this.id = book.id;
    this.name = book.name;
    this.createtime = book.createtime;
    this.style = book.style;
}
Notification.get_all_US = function(id,result){
    let sql2 = "select nt.id,nt.createtime, ss.name, nt.style from notifications nt left join salonservice ss on nt.serviceid = ss.id where nt.cusid = " + id;
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
module.exports = Notification;