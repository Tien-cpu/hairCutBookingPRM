exports.getcategory = function( req , res){
    return res.json(
        [
            {"icon": "assets/icons/coloring.svg", "text": "Nhuộm tóc"},
            {"icon": "assets/icons/haircut.svg", "text": "Cát Tóc"},
            {"icon": "assets/icons/hairstyle.svg", "text": "Tạo kiểu"},
            {"icon": "assets/icons/shaving.svg", "text": "Cạo mặt"},
            {"icon": "assets/icons/shampoo.svg", "text": "Gội đâu"},
        ]);
}
exports.getcategorylist = function( req , res){
    return res.json(
        [
            {"id": 1, "text": "Nhuộm tóc"},
            {"id": 2, "text": "Cát Tóc"},
            {"id": 3, "text": "Tạo kiểu"},
            {"id": 4, "text": "Cạo mặt"},
            {"id": 5, "text": "Gội đâu"},
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