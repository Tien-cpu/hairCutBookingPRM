import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:bookinghaircut/Models/reslogin.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';
// import 'package:dio/dio.dart';

class netWorkRequestnode {
  final porturl = 'http://localhost:3000/login/checklogin';
  Future<List<reslogin>> checklogin() async {
    Uri uri = Uri.parse(porturl);
    http.Response res;
    try {
      res = await http.get(uri, headers: {
        "Accept": "application/json",
        "Access-Control_Allow_Origin": "*"
      });
    } catch (e) {
      print(e.toString());
      throw Exception(e);
    }
    if (res.statusCode == 200) {
      List<dynamic> body = json.decode(res.body);
      List<reslogin> post =
          body.map((dynamic e) => reslogin.fromJson(e)).toList();

      return post;
    } else {
      throw Exception("not found");
    }
  }

  Future<reslogin> checklogint() async {
    Uri uri = Uri.parse(porturl);
    http.Response res;
    print("1");
    try {
      res = await http.get(uri, headers: {
        "Accept": "application/json",
        "Access-Control_Allow_Origin": "*"
      });
    } catch (e) {
      print(e.toString());
      throw Exception(e);
    }
    print("2");
    try {
      if (res.statusCode == 200) {
        print(res.body);
        List<dynamic> body = json.decode(res.body);
        print("5");
        reslogin post =
            body.map((dynamic e) => reslogin.fromJson(e)).toList().first;
        print("4");
        return post;
      } else {
        throw Exception("not found");
      }
    } catch (e) {
      print(e.toString());
      throw Exception(e);
    }
  }

  resloginF() {
    Future<reslogin> ketqua = checklogint();
  }
}
