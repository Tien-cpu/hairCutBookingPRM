const id = require('../models/login');
exports.checklogin2 = function( req , res){
    // id.set('test');
    // console.log("run controller test");
    // id.get(function(data){
    //     // return res
	// 	// 	.status(200)
	// 	// 	.json(data);
    //     return JSON.stringify(data)
    //     // return res.send({
    //     //     statusCode: 200,
    //     //     headers: {
    //     //         "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    //     //         "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    //     //         "Access-Control-Allow-Headers": "Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,locale",
    //     //         "Access-Control-Allow-Methods": "POST, OPTIONS"
    //     //       },
    //     //     body: JSON.stringify(data)
    //     // });
    // });
    
    return res.json(
        [
            {
                id: "true"
            }
            
        ]);
    console.log("end controller test");
}
exports.checklogin = function( req , res){
    // id.set('test');
    // console.log("run controller test");
    // id.get(function(data){
    //     // return res
	// 	// 	.status(200)
	// 	// 	.json(data);
    //     return JSON.stringify(data)
    //     // return res.send({
    //     //     statusCode: 200,
    //     //     headers: {
    //     //         "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    //     //         "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    //     //         "Access-Control-Allow-Headers": "Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,locale",
    //     //         "Access-Control-Allow-Methods": "POST, OPTIONS"
    //     //       },
    //     //     body: JSON.stringify(data)
    //     // });
    // });
    
    return res.json(
        [
            {
                id: "true"
            }
            ,
        ]);
    console.log("end controller test");
}