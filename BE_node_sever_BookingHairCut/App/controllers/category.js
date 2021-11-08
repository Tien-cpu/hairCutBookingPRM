var category = require('../models/category');
exports.getcategory = function( req , res){
    category.getallctus(function(data2){
        if(data2.length === 0){
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
            }else{
                var dataR = [];
                data2.forEach(element => {
                    dataR.push(
                        {
                            "id" : element.id,
                            "text": element.name,
                            "icon": element.icon,
                        }
                    )
                  });

                console.log(dataR)
                return res.json(dataR);
            }
          }
      )
}
exports.getcategorylist = function( req , res){
    category.getallct(function(data2){
        if(data2.length === 0){
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
            }else{
                var dataR = [];
                data2.forEach(element => {
                    dataR.push(
                        {
                            "id" : element.id,
                            "text": element.name,
                        }
                    )
                  });
                return res.json(dataR);
            }
          }
      )
    // return res.json(
    //     [
    //         {"id": 1, "text": "Nhuộm tóc"},
    //         {"id": 2, "text": "Cát Tóc"},
    //         {"id": 3, "text": "Tạo kiểu"},
    //         {"id": 4, "text": "Cạo mặt"},
    //         {"id": 5, "text": "Gội đâu"},
    //     ]);
}
exports.getasevicecategory = function( req , res){
    return res.json(
        [
            {
                id: "true"
            }
            ,
        ]);
}