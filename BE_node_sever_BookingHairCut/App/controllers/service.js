const Service = require('../models/service');
exports.getservice = function (req, res) {
    Service.get_all_US(function (data2) {
        if (data2.length === 0) {
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
        } else {
            var dataR = [];
            data2.forEach(element => {
                dataR.push(
                    {
                        "id": element.id,
                        "name": element.name,
                        "description": element.DescriptionService,
                        "category": element.categoryname,
                        "image": element.image,
                        "price": element.Price,
                        "open": element.opentime,
                        "close": element.closetime,
                        "rating": 4.4,
                        "offerPrice": element.Price,
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
exports.getserviceGetcategory = function (req, res) {
    if (req.params.category == 0) {
        Service.get_all_US(function (data2) {
            if (data2.length === 0) {
                return res.json(
                    [
                        {
                            id: 0
                        }
                        ,
                    ]);
            } else {
                var dataR = [];
                data2.forEach(element => {
                    dataR.push(
                        {
                            "id": element.id,
                            "name": element.name,
                            "description": element.DescriptionService,
                            "category": element.categoryname,
                            "image": element.image,
                            "price": element.Price,
                            "open": element.opentime,
                            "close": element.closetime,
                            "rating": 4.4,
                            "offerPrice": element.Price,
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
    } else {
        Service.get_all_US_category(req.params.category, function (data2) {
            if (data2.length === 0) {
                return res.json(
                    [
                        {
                            id: 0
                        }
                        ,
                    ]);
            } else {
                var dataR = [];
                data2.forEach(element => {
                    dataR.push(
                        {
                            "id": element.id,
                            "name": element.name,
                            "description": element.DescriptionService,
                            "category": element.categoryname,
                            "image": element.image,
                            "price": element.Price,
                            "open": element.opentime,
                            "close": element.closetime,
                            "rating": 4.4,
                            "offerPrice": element.Price,
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

}
exports.postservice = function (req, res) {
    console.log(req.body);
    console.log(req.body.date);
    console.log(req.body.totalPrice);
}
exports.getserviceadmin = function (req, res) {
    Service.get_all(req.params.id, function (data2) {
        if (data2.length === 0) {
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
        } else {
            var dataR = {
                "items": []
            };
            data2.forEach(element => {
                dataR.items.push(
                    {
                        "id": element.id,
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
exports.getaserviceadmindetail = function (req, res) {
    Service.detail(req.params.id, function (data2) {
        if (data2.length === 0) {
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
        } else {
            return res.json({
                "id": data2[0].id,
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
exports.update = function (req, res) {
    if (req.body.id == 0) {
        Service.insert(req.params.id, req.body, function (data2) {

        }
        )
    } else {
        Service.update(req.body, function (data2) {

        }
        )
    }

}
exports.getasevicecategory = function (req, res) {
    return res.json(
        [
            {
                id: "true"
            }
            ,
        ]);
}

