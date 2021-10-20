// import 'package:flutter/material.dart';
// import "package:http/http.dart";

// class account_model {
//   int id;

//   account_model({required this.id});

//   account_model.fromJson(Map<String, dynamic> json) {
//     id = json['id'];
//   }

//   Map<String, dynamic> toJson() {
//     final Map<String, dynamic> data = new Map<String, dynamic>();
//     data['id'] = this.id;
//     return data;
//   }
// }

// class checkloginRequest {
//   static final url = "http://localhost:3000/login/checklogin";

//   static List<account_model> account_modelpost(String repon) {
//     var list = json.decode(repon) as List<dynamic>;
//     List<account_model> result = list.map((e) => account_model.fromJson(e)).toList();
//     return result;
//   }
// }
