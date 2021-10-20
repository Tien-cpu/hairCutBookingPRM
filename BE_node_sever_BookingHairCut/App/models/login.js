const LoginModel = function(loginModel){
    this.id = loginModel.id;
}
// class id {
// 	id() {
// 		this.id = '';
// 	}

//     id(data) {
// 		this.id = data;
// 	}
// 	getInfo() {
// 		return { id: this.id };
// 	}

//     setInfor(data) {
//         this.id = data;
//     }
// }
LoginModel.get = function(result){
    var data = [
        {
            id: this.id
        }
    ];
}
LoginModel.set = function(id){
    this.id = id;
}
module.exports = LoginModel;
