import 'package:flutter/material.dart';
import 'package:prm_as_tiennn8_se141023/common_patten/size_config.dart';
import 'package:prm_as_tiennn8_se141023/screan/sign_in_success/components/body.dart';

class SinginSuccessScreen extends StatelessWidget {
  static String routeName = "/signinSuccess";
  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    return Scaffold(
      body: Body(),
    );
  }
}
