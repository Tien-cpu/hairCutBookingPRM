const Service = require('../models/service');
exports.getservice = function( req , res){
    return res.json(
        [
            {
                "name": "Uốn Gợn Sóng",
                "description": "Tóc bồng bềnh, gợn sóng",
                "image":
                    'https://ihsvn.com/wp-content/uploads/2020/07/salon-toc-dep-bac-nhat-tphcm-10.jpg',
                "numberOfUsedPeople": 500,
                "price": 300000,
                "offerPrice": 250000,
                "rating": 4.4,
                "isSelected": false,
                "barbershop": "Hair Salon Minh Dũng"},
            {
                "name": "Duỗi thẳng tóc",
                "description": "Tóc xuôn mượt",
                "image":
                    'https://niceshop.vn/wp-content/uploads/2020/03/cach-cham-soc-toc-duoi-tai-nha.jpg',
                "numberOfUsedPeople": 0,
                "price": 200000,
                "rating": 0,
                "isSelected": false,
                "barbershop": "Hair Salon Minh Dũng"},
            {
                "name": "Combo Uốn + Phục Hồi",
                "description": "Uốn gợn sóng và phục hồi tóc",
                "image":
                    'https://oms.hotdeal.vn/"image"s/editors/sources/000339652064/339652-339652-body-bs%20(6).jpg',
                "numberOfUsedPeople": 25,
                "price": 500000,
                "offerPrice": 400000,
                "rating": 4.6,
                "isSelected": false,
                "barbershop": "Hair Salon Minh Dũng"},
            {
                "name": "Combo Nhuộm + Phục Hồi",
                "description": "Nhuộm tóc với nhiều màu đa dạng",
                "image":
                    'https://toplist.vn/"image"s/800px/hair-salon-hieu-trang-576089.jpg',
                "numberOfUsedPeople": 30,
                "price": 1000000,
                "offerPrice": 850000,
                "rating": 4.9,
                "isSelected": false,
                "barbershop": "Hair Salon Minh Dũng"},
        ]);
}
exports.getserviceadmin = function( req , res){
    console.log("salon id: "+req.params.id)
    Service.get_all(req.params.id,function(data2){
        if(data2.length === 0){
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
            }else{
                var dataR = {
                    "items" : []
                };
                data2.forEach(element => {
                    dataR.items.push(
                        {
                            "id" : element.id,
                            "name": element.name,
                            "description": element.DescriptionService,
                            "category": element.categoryname,
                            "image": element.image,
                            "price": element.Price,
                            "rating": 4.4,
                            "offerPrice": 0,
                            "isSelected": true,
                            "numberOfUsedPeople": 500,
                            "barbershop": "Hair Salon Minh Dũng"
                        }
                    )
                  });
                return res.json(dataR);
            }
          }
      )
}
exports.getaserviceadmindetail = function( req , res){
    console.log("service id: "+req.params.id)
    Service.detail(req.params.id,function(data2){
        if(data2.length === 0){
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
            }else{
                console.log("salon id: "+data2)
                return res.json({
                    "id" : data2[0].id,
                    "name": data2[0].name,
                    "description": data2[0].DescriptionService,
                    "category": data2[0].categoryname,
                    "image": data2[0].image,
                    "price": data2[0].Price,
                    "rating": 4.4,
                    "offerPrice": 0,
                    "isSelected": true,
                    "numberOfUsedPeople": 500,
                    "barbershop": "Hair Salon Minh Dũng"
                });
            }
          }
      )
}
exports.update = function( req , res){
    console.log(req.body)
    console.log("service CRUD id: "+req.params.id)
    if(req.body.id == 0){
        Service.insert(req.params.id,req.body,function(data2){
        
        }
    )
    }else{
        Service.update(req.body,function(data2){
        
        }
    )
    }
    
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

