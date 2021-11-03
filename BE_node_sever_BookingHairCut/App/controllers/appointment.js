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