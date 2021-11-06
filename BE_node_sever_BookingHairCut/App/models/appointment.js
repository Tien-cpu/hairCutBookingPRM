var Connection = require('../commons/connection');
const Appointment = function(appointment) {
    this.totalPrice = book.totalPrice;
    this.date = book.date;
    this.time = book.time;
    this.status = book.status;
    this.barbershop = book.barbershop;
    this.services = book.services;
    this.image = book.image;
}

Appointment.get_all = function(result){
    var data = [
        {   "totalPrice": 400000,
            "date": '11 - 10 - 2021',
            "time": '3:30 PM',
            "status": 'pending',
            "barbershop": 'barbershop vn',
            "services": 'toc ngan',
            "image":
            'https://ihsvn.com/wp-content/uploads/2020/07/salon-toc-dep-bac-nhat-tphcm-10.jpg',},
        {   "totalPrice": 400000,
            "date": '11 - 10 - 2021',
            "time": '3:30 PM',
            "status": 'pending',
            "barbershop": 'barbershop vn',
            "services": 'toc ngan',
            "image":
            'https://ihsvn.com/wp-content/uploads/2020/07/salon-toc-dep-bac-nhat-tphcm-10.jpg',},
        {   "totalPrice": 400000,
            "date": '11 - 10 - 2021',
            "time": '3:30 PM',
            "status": 'pending',
            "barbershop": 'barbershop vn',
            "services": 'toc ngan',
            "image":
            'https://ihsvn.com/wp-content/uploads/2020/07/salon-toc-dep-bac-nhat-tphcm-10.jpg',},
        {   "totalPrice": 400000,
            "date": '11 - 10 - 2021',
            "time": '3:30 PM',
            "status": 'pending',
            "barbershop": 'barbershop vn',
            "services": 'toc ngan',
            "image":
            'https://ihsvn.com/wp-content/uploads/2020/07/salon-toc-dep-bac-nhat-tphcm-10.jpg',},
    ]
    result(data);
}


Appointment.get_all_for_salon = function(id,result){
  let sql2 = "select a.id, a.totalPrice, a.date, a.time, case when a.status = 1 then 'comming' else case when a.status = 2 then 'finnish' else 'cancel' end end as status "
  +", u.name as cutomerName, ss.name as services, ss.image as image "
  +"from apointment a left join salonservice ss on a.ServiceID = ss.id left join usertbl u on a.cusid = u.id "
  +"where ss.salonID = "+id;
  console.log(sql2);
  Connection.query(sql2, function(err, data){
    console.log(data);
      if(err){
          result(err);
          return;
      } else {
          result(data);
      }
  });
}
module.exports = Appointment;