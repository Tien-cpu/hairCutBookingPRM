const salonowner = require('../models/salonowner');
exports.updatesalonowner = function(req, res){
  console.log(req.body)
  salonowner.update(req.body,function(data){
    console.log(data)
    if(data.length === 0){
        return res.json(
            [
                {
                    id: 0
                }
                ,
            ]);
    }else{
      // salonowner.getworkday(data[0].salonID,function(data2){
      //   if(data2.length === 0){
      //       return res.json(
      //           [
      //               {
      //                   id: 0
      //               }
      //               ,
      //           ]);
      //       }else{
      //         data2.forEach(element => {
      //           console.log(element)
      //           dataResult.workDay.push({
      //             date : element.date , id : element.dateid, status : element.status == 0? false : true
      //           })
      //         });
      //         return res.json(dataResult);
      //       }
      //     }
      // )
    }
        // return res.json(dataResult);
});

}
exports.getsalonowner = function( req , res){
    console.log("salon id: "+req.params.id)
    return res.json(
        
            {   "id": 1,
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
            },
        );
}
exports.getasevicecategory = function( req , res){
    return res.json(
        [
            {   "id": 1,
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
            },
        ]);
}
exports.getsalondetailadmin = function( req , res){
  console.log("salon id: "+req.params.id)
  var dataResult = 
    { "id": 0,
    "name": '',
    "phonenumber": '',
    "email": '',
    "Address": '',
    "opentime": '',
    "closetime": '',
    "workDay": [],
    "Description": '',
    "totalfeedback": '',
    "totalfinish": '',
    "ratingSalon": '',
    "imageAvatar": '',
    "imageBackground": '',
    };
    var id = req.params.id;
    console.log(id);
    salonowner.getdetail(id,function(data){
        console.log(data)
        if(data.length === 0){
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
        }else{
          dataResult.id = data[0].salonID
          dataResult.name = data[0].salonName
          dataResult.phonenumber = data[0].phoneNumber
          dataResult.email = data[0].email
          dataResult.phonenumber = data[0].phoneNumber
          dataResult.Description = data[0].Description
          dataResult.imageBackground = data[0].imageBackground
          dataResult.imageAvatar = data[0].imageAvatar
          dataResult.Address = data[0].Address
          dataResult.opentime = data[0].opentime
          dataResult.closetime = data[0].closetime
         
          salonowner.getworkday(data[0].salonID,function(data2){
            if(data2.length === 0){
                return res.json(
                    [
                        {
                            id: 0
                        }
                        ,
                    ]);
                }else{
                  data2.forEach(element => {
                    console.log(element)
                    dataResult.workDay.push({
                      date : element.date , id : element.dateid, status : element.status == 0? false : true
                    })
                  });
                  return res.json(dataResult);
                }
              }
          )
        }
            // return res.json(dataResult);
    });
}
exports.postupdatesalondetailadmin = function( req , res){

    salonowner.getdetail(req.body,function(data){
        console.log(data)
        if(data.length === 0){
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
        }else{
          salonowner.getworkday(data[0].salonID,function(data2){
            if(data2.length === 0){
                return res.json(
                    [
                        {
                            id: 0
                        }
                        ,
                    ]);
                }else{
                  data2.forEach(element => {
                    console.log(element)
                    dataResult.workDay.push({
                      date : element.date , id : element.dateid, status : element.status == 0? false : true
                    })
                  });
                  return res.json(dataResult);
                }
              }
          )
        }
            // return res.json(dataResult);
    });
}