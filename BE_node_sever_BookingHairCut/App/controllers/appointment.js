
const Appointment = require('../models/appointment');
exports.getpending = function( req , res){
    return res.json(
        [
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
        ]);
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
            {   "id" : 2,
                "totalPrice": 400000,
                "date": '11 - 10 - 2021',
                "time": '3:30 PM',
                "status": 'finnish',
                "cutomerName": 'Nguyen Văn B',
                "services": 'toc ngan',
                "image":
                'https://ihsvn.com/wp-content/uploads/2020/07/salon-toc-dep-bac-nhat-tphcm-10.jpg',},
            {   "id" : 3,
                "totalPrice": 400000,
                "date": '11 - 10 - 2021',
                "time": '3:30 PM',
                "status": 'finnish',
                "cutomerName": 'Nguyen Văn C',
                "services": 'toc ngan',
                "image":
                'https://ihsvn.com/wp-content/uploads/2020/07/salon-toc-dep-bac-nhat-tphcm-10.jpg',},
            {   "id" : 4,
                "totalPrice": 400000,
                "date": '11 - 10 - 2021',
                "time": '3:30 PM',
                "status": 'cancel',
                "cutomerName": 'Nguyen Văn D',
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
                    {
                        id: 0
                    }
                    ,
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
            {
                id: "true"
            }
            ,
        ]);
    console.log("end controller test");
}