var Connection = require('../commons/connection');
const Login = function(Account) {
    this.userid = Account.userid;
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
module.exports = Login;
