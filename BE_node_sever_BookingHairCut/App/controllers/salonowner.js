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