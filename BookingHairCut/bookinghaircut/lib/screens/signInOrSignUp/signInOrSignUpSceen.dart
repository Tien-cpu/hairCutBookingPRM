import 'package:bookinghaircut/components/primary_button.dart';
import 'package:bookinghaircut/constants.dart';
import 'package:bookinghaircut/screens/Login/loginScreen.dart';
import 'package:flutter/material.dart';

class SignInOrSignUpSceen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
          child: Column(
        children: [
          Spacer(
            flex: 2,
          ),
          Image.asset(
            MediaQuery.of(context).platformBrightness == Brightness.light
                ? "assets/images/Logo_light.png"
                : "assets/images/Logo_dark.png",
            height: 146,
          ),
          Spacer(),
          PrimaryButton(
            text: "SignIn",
            press: () => Navigator.push(context,
                MaterialPageRoute(builder: (context) => LoginScreen())),
          ),
          SizedBox(
            height: kDefaultPadding * 1.5,
          ),
          PrimaryButton(text: "SignUp", press: () {}),
          Spacer(
            flex: 3,
          )
        ],
      )),
    );
  }
}
