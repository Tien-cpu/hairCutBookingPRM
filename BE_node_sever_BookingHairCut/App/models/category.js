var Connection = require('../commons/connection');
const Salon = function(appointment) {
    this.id = book.id;
    this.name = book.name;
    this.icon = book.icon;
    this.status = book.status;
}
Salon.getallct = function(id,result){
  
  let sql2 = "select * from saloncategory";
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
module.exports = Salon;