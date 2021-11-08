import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:bookinghaircut/Models/reslogin.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';
// import 'package:dio/dio.dart';

class netWorkRequestnode {
  final porturl = 'http://localhost:3000/api/v1/user/login/checklogin';
  Future<List<reslogin>> checklogin() async {
    Uri uri = Uri.parse(porturl);
    http.Response res;
    try {
      res = await http.post(uri, headers: {
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

  Future<reslogin> checklogint(String email, String pass) async {
    Uri uri = Uri.parse(porturl);
    http.Response res;
    try {
      res = await http.post(
        uri,
        headers: {
          "Accept": "application/json",
          "Access-Control_Allow_Origin": "*"
        },
        body: {"email": email, "pass": pass},
      );
    } catch (e) {
      print(e.toString());
      throw Exception(e);
    }
    try {
      if (res.statusCode == 200) {
        List<dynamic> body = json.decode(res.body);
        reslogin post =
            body.map((dynamic e) => reslogin.fromJson(e)).toList().first;
        // SharedPreferences prefs = await SharedPreferences.getInstance();
        // var status = prefs.getBool('isLoggedIn') ?? false;
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
    // Future<reslogin> ketqua = checklogint();
  }
}
