import 'package:bookinghaircut/constants.dart';
import 'package:flutter/material.dart';
import 'package:bookinghaircut/size_config.dart';
import 'package:bookinghaircut/screens/welcome/components/body.dart';

class welcomeScreen extends StatelessWidget {
  static String routeName = "/welcome";
  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    return Scaffold(
      body: Body(),
    );
  }
}
