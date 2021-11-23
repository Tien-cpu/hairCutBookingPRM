import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:bookinghaircut/models/category.dart';
import 'package:bookinghaircut/models/service_model.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';
// import 'package:dio/dio.dart';

class netWorkRequestService {
  final porturl = 'http://3.19.62.41:8190/service/getservice';

  Future<List<ServicesModel>> letcategory() async {
    Uri uri = Uri.parse(porturl);
    print("1");
    http.Response res;
    try {
      print("2");
      res = await http.get(uri, headers: {
        "Accept": "application/json",
        "Access-Control_Allow_Origin": "*"
      });
      print("3");
    } catch (e) {
      print(e.toString());
      throw Exception(e);
    }
    // if (res.statusCode == 200) {
    print("4");
    print(res.body);
    List<dynamic> body = json.decode(res.body);
    print("body");
    List<ServicesModel> category =
        body.map((dynamic e) => ServicesModel.fromJson(e)).toList();
    return category;
    // } else {
    // throw Exception("not found");
    // }
  }
}
