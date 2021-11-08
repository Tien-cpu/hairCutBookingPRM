var Connection = require('../commons/connection');
const Login = function(Account) {
    this.userid = Account.userid;
}
Login.regis_accountid_by_username_forUS = function(username, password,result){
    let sql2 = "insert into usertbl (roleid,name,dayOfBirth,phoneNumber,address,email,gender,status)"+
   "select roleid,name,dayOfBirth,phoneNumber,address,email,gender,status from usertbl where id = 2;";
    console.log(sql2);
    Connection.query(sql2, function(err, data1){
        if(err){
            result(err);
            return;
        } else {
            sql3 = "select count(*) as count from accountbtl where userName = '"+username+"' ;";
            Connection.query(sql3, function(err, data2){
                console.log(data1);
                if(err){
                    result(
                        291);
                    return;
                } else {
                    console.log(data2);
                    sql4 = "select max(id) as id from usertbl;";
                    Connection.query(sql4, function(err, data3){
                        console.log("data3");
                        console.log(data3.id);
                        if(err){
                            result(291);
                            return;
                        } else {
                            console.log("data3.id");
                            console.log(data3[0].id);
                            var idinser = data3[0].id;
                            console.log(idinser);
                            sql5 = "insert into accountbtl (userid,userName, password) value ('"+idinser+"','"+username+"','"+password+"');";
                            Connection.query(sql5, function(err, data4){
                                if(err){
                                    result(err);
                                    return;
                                } else {
                                    result(data4);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
Login.get_accountid_by_username = function(username, password,result){
    let sql2 = "select usertbl.id from accountbtl left join usertbl on (accountbtl.userid = usertbl.id) where userName = '"+username+"' and password = '"+password+"'  and usertbl.roleid = 3";
    console.log(sql2);
    Connection.query(sql2, function(err, data){
        if(err){
            result(err);
            return;
        } else {
            result(data);
        }
    });
}
Login.get_accountid_by_username_forUS = function(username, password,result){
    let sql2 = "select usertbl.id from accountbtl left join usertbl on (accountbtl.userid = usertbl.id) where userName = '"+username+"' and password = '"+password+"'  and usertbl.roleid = 1";
    console.log(sql2);
    Connection.query(sql2, function(err, data){
        if(err){
            result(err);
            return;
        } else {
            result(data);
        }
    });
}
module.exports = Login;
