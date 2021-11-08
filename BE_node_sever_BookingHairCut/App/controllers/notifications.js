const notification = require('../models/notifications');
exports.getnotificationuser = function( req , res){
    notification.get_all_US(req.params.id,function (data2) {
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
                        "createtime": element.createtime,
                        "style": element.style,
                    }
                )
            });
            return res.json(dataR);
        }
    }
    );
}