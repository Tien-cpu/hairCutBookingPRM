var Connection = require('../commons/connection');
const Appointment = function(appointment) {
    this.id = book.id;
    this.name = book.name;
    this.description = book.description;
    this.image = book.image;
    this.numberOfUsedPeople = book.numberOfUsedPeople;
    this.price = book.price;
    this.offerPrice = book.offerPrice;
    this.rating = book.rating;
    this.isSelected = book.isSelected;
    this.barbershop = book.barbershop;
}
Appointment.get_all_US = function(result){
    let sql2 = "select ss.id, ss.name, ss.DescriptionService, ss.image, ss.Price, sc.name as categoryname, sl.opentime, sl.closetime from salonservice ss left join saloncategory sc on ss.categoryid = sc.id left join salon sl on ss.salonID = sl.salonOwner";
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
Appointment.get_all_US_category = function(id,result){
    let sql2 = "select ss.id, ss.name, ss.DescriptionService, ss.image, ss.Price, sc.name as categoryname, sl.opentime, sl.closetime from salonservice ss left join saloncategory sc on ss.categoryid = sc.id left join salon sl on ss.salonID = sl.salonOwner where sc.id = "+id;
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
Appointment.get_all = function(id,result){
    let sql2 = "select ss.id, ss.name, ss.DescriptionService, ss.image, ss.Price, sc.name as categoryname from salonservice ss left join saloncategory sc on ss.categoryid = sc.id where ss.salonID = "+id;
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
Appointment.detail = function(id,result){
    let sql2 = "select ss.id, ss.name, ss.DescriptionService, ss.image, ss.Price, sc.id as categoryname from salonservice ss left join saloncategory sc on ss.categoryid = sc.id where ss.id = "+id;
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
Appointment.update = function(obj,result){
    let sql2 = "update `salonservice` set `name` = '"+obj.name+"', `Price` = "+obj.price+", `categoryid` = "+obj.category+", `DescriptionService` = '"+obj.description+"' where id = "+obj.id;
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
Appointment.insert = function(id,obj,result){
    let sql2 = "INSERT INTO `salonservice` (`name`, `dateCreate`, `salonID`, `Price`, `DescriptionService`, `statusService`,`image`,`categoryid`) VALUES"
    +"('"+obj.name+"', sysdate(), "+id+", "+obj.price+", '"+obj.description+"', 1,'https://ihsvn.com/wp-content/uploads/2020/07/salon-toc-dep-bac-nhat-tphcm-10.jpg', "+obj.category+");";
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
module.exports = Appointment;