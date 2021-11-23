
const Appointment = require('../models/appointment');
exports.getpending = function( req , res){
    Appointment.get_all_for_us(1,2,function(data){
        if(data.length === 0){
            return res.json([]);
            }else{
                var dataR = [];
                data.forEach(element => {
                    dataR.push(
                        {
                            "id" : element.id,
                            "totalPrice": element.totalPrice,
                            "date": element.date,
                            "time": element.time,
                            "status": element.status,
                            "services": element.services,
                            "image": element.image,
                            "barbershop": element.storename,
                        }
                    )
                  });
                return res.json(dataR);
            }
          }
      )
}
exports.CancelBookingService = function( req , res){
    Appointment.bookingServiceCancelUS(req.params.id,function(data){
        if(data.length === 0){
            return res.status(291);
            }else{
                return res.status(200);
            }
          }
      )
}
exports.getapoinmentlistus = function( req , res){
    Appointment.get_all_for_us(req.params.id,req.params.style,function(data){
        if(data.length === 0){
            return res.json([]);
            }else{
                console.log(data)
                var dataR = [];
                data.forEach(element => {
                    dataR.push(
                        {
                            "id" : element.id,
                            "totalPrice": element.totalPrice,
                            "date": element.date,
                            "time": element.time,
                            "status": element.status,
                            "services": element.services,
                            "image": element.image,
                            "barbershop": element.storename,
                        }
                    )
                  });
                return res.json(dataR);
            }
          }
      )
}
exports.postBookingService = function( req , res){
    Appointment.bookingService(req.body,function(data){
        if(data == 'OK'){
            res.status(200).json(
                [
                ]);
            }else{
                res.status(291).json(
                    [
                    ]);
            }
          }
      )
}
exports.getadminApointment = function( req , res){
    return res.json(
        [
            {   
                "id" : 1,
                "totalPrice": 400000,
                "date": '11 - 10 - 2021',
                "time": '3:30 PM',
                "status": 'comming',
                "cutomerName": 'Nguyen Văn A',
                "services": 'toc ngan',
                "image":
                'https://ihsvn.com/wp-content/uploads/2020/07/salon-toc-dep-bac-nhat-tphcm-10.jpg',},
        ]);
}
exports.postCancelService = function( req , res){
    console.log(req.body);
}
exports.getapoinmentadmindetail = function( req , res){
    console.log("service id: "+req.params.id)
    Appointment.get_all_for_salon(req.params.id,function(data){
        if(data.length === 0){
            return res.json(
                [
                ]);
            }else{
                console.log(data)
                var dataR = [];
                data.forEach(element => {
                    dataR.push(
                        {
                            "id" : element.id,
                            "totalPrice": element.totalPrice,
                            "date": element.date,
                            "time": element.time,
                            "status": element.status,
                            "cutomerName": element.cutomerName,
                            "services": element.services,
                            "image": element.image,
                        }
                    )
                  });
                return res.json(dataR);
            }
          }
      )
}
exports.getasevicecategory = function( req , res){
    return res.json(
        [
        ]);
    console.log("end controller test");
}