const loginAccount = require('../models/login');
exports.checklogin2 = function( req , res){
    return res.json(
        [
            {
                id: "true"
            }
            
        ]);
}
exports.checkloginuser = function( req , res){
    const account = req.body
    // return res.json(account);
    var username = account.email;
    var password = account.pass;
    loginAccount.get_accountid_by_username_forUS(username,password,function(data){
        if(data.length === 0){
            return res.status(291).json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
        }else{
            // return res.json(data);
            var idd = data[0].id;
            return res.status(200).json(
                [
                    {
                        id: idd
                    }
                    ,
                ]);
        }
    });
}
exports.regisloginuser = function( req , res){
    const account = req.body
    var username = account.email;
    var password = account.pass;
    loginAccount.regis_accountid_by_username_forUS(username,password,function(data){
        if(data == 291){
            return res.status(291);
        }else{
            return res.status(200);
        }
    });
}
exports.checkloginadmin = function( req , res){
    const account = req.body
    var username = account.email;
    var password = account.pass;
    loginAccount.get_accountid_by_username(username,password,function(data){
        if(data.length === 0){
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
        }else{
            return res.json(data);
        }
    });
}