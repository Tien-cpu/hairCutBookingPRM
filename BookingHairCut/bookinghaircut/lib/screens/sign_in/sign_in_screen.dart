import 'package:flutter/material.dart';
import 'package:bookinghaircut/size_config.dart';
import 'package:bookinghaircut/screens/sign_in/components/body.dart';

class SignInScrean extends StatelessWidget {
  static String routerName = "/sign_in";
  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    return Scaffold(
      appBar: AppBar(
        title: Text("Sign In"),
      ),
      body: Body(),
    );
  }
}
