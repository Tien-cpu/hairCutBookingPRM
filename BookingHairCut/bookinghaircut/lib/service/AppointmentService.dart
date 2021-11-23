import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:bookinghaircut/models/category.dart';
import 'package:bookinghaircut/models/service_model.dart';
import 'package:bookinghaircut/models/appointment_model.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';
// import 'package:dio/dio.dart';

class netWorkRequestAppointmentService {
  final porturl = 'http://3.19.62.41:8190/service/getservice';

  Future<List<AppointmentModel>> listAppointmentPending() async {
    Uri uri =
        Uri.parse('http://3.19.62.41:8190/appointment/getappointmentPending');
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
      print(res.body);
      List<dynamic> body = json.decode(res.body);
      List<AppointmentModel> category =
          body.map((dynamic e) => AppointmentModel.fromJson(e)).toList();
      print(category.length);
      return category;
    } else {
      throw Exception("not found");
    }
  }
}
