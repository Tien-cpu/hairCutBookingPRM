var Connection = require('../commons/connection');
const category = function(category) {
    this.id = category.id;
    this.name = category.name;
    this.icon = category.icon;
    this.status = category.status;
}
category.getallct = function(result){
  
  let sql2 = "select id,name from saloncategory";
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
category.getallctus = function(result){
  
    let sql2 = "select id,name,icon from saloncategory";
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
module.exports = category;