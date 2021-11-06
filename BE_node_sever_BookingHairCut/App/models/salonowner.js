var Connection = require('../commons/connection');
const Salon = function(appointment) {
    this.id = book.id;
    this.name = book.name;
    this.phonenumber = book.phonenumber;
    this.email = book.email;
    this.Address = book.Address;
    this.opentime = book.opentime;
    this.closetime = book.closetime;
    this.rating = book.rating;
    this.workDay = book.workDay;
    this.Description = book.Description;
    this.totalfeedback = book.totalfeedback;
    this.totalfinish = book.totalfinish;
    this.ratingSalon = book.ratingSalon;
    this.imageAvatar = book.imageAvatar;
    this.imageBackground = book.imageBackground;
}

Salon.get_a_salon = function(result){
    var data = 
    { "id": 1,
    "name": 'Hair Salon Minh Dũng',
    "phonenumber": '0866675302',
    "email": 'MinhDung@gmail.com',
    "Address": '231 Pham Van Dong, Tan Phu, Go Vap',
    "opentime": '16',
    "closetime": '39',
    "workDay": [
        {
            date : 'thứ 2' , id : 2, status : true
          },
          {
            date : 'thứ 3' , id : 3, status : false
          },
          {
            date : 'thứ 4' , id : 4, status : true
          },
          {
            date : 'thứ 5' , id : 5, status : false
          },
          {
            date : 'thứ 6' , id : 6, status : true
          },
          {
            date : 'thứ 7' , id : 7, status : true
          },
          {
            date : 'chủ nhật' , id : 8, status : true
          },
    ],
    "Description": 'Ở đây chúng tôi có nhưng người thợ chuyên nghiệp nhất',
    "totalfeedback": '12',
    "totalfinish": '24',
    "ratingSalon": '4.4',
    "imageAvatar": 'https://www.itourvn.com/images/easyblog_images/2020/hair_salons_hcmc/hair-salons-in-ho-chi-minh-city-ace.jpg',
    "imageBackground": 'https://www.itourvn.com/images/easyblog_images/2020/hair_salons_hcmc/hair-salons-in-ho-chi-minh-city-ace1.jpg',
    };
    result(data);
}
Salon.getdetail = function(id,result){
  
  let sql2 = "select * from salon s where s.salonOwner = "+id;
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
Salon.update = function(ojb,result){
  let sql2 = "update  `salon` set `salonName` = '"+ojb.name+"' , `phoneNumber` = '"+ojb.phonenumber+"', `email` = '"+ojb.email+"'"+
  ",`Address` = '"+ojb.Address+"', `Description` = '"+ojb.Description+"' , `closetime` = '"+ojb.closetime+"', `opentime` = '"+ojb.opentime+"' where `salonID` = "+ojb.id;

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
Salon.insert = function(ojb,result){
  // let sql2 = "INSERT INTO `salon` (`salonName`, `dateCreate`, `salonOwner`, `phoneNumber`, `email`"
  // +", `Description`, `imageBackground`, `imageAvatar`, `Address`, `closetime`, `opentime`, `statusSalonID`) VALUES"
  // +"(`"+ojb.salonName+"`, sysdate(), `salonOwner`, `phoneNumber`, `email`"+
  // ", `Description`, `imageBackground`, `imageAvatar`, `Address`, `closetime`, `opentime`, `statusSalonID`)";
  // console.log(sql2);
  // Connection.query(sql2, function(err, data){
  //     if(err){
  //         result(err);
  //         return;
  //     } else {
  //         result(data);
  //     }
  // });
}
Salon.getworkday = function(id,result){
  
  let sql2 = "select date,dateid, case when status = 0 then false else true end as status from worktimetbl w where w.salonID = "+id;
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