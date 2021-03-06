import 'package:flutter/material.dart';
import 'package:prm_as_tiennn8_se141023/common_patten/default_button.dart';
import 'package:prm_as_tiennn8_se141023/common_patten/size_config.dart';

class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(height: SizeConfig.screenHeight * 0.04),
        Image.asset(
          "assets/images/success.png",
          height: SizeConfig.screenHeight * 0.4, //40%
        ),
        SizedBox(height: SizeConfig.screenHeight * 0.08),
        Text(
          "Booking fail",
          style: TextStyle(
            fontSize: getProportionateScreenWidth(30),
            fontWeight: FontWeight.bold,
            color: Colors.black,
          ),
        ),
        Spacer(),
        SizedBox(
          width: SizeConfig.screenWidth * 0.6,
          child: DefaultButton(
            text: "Back to Home",
            press: () {
              Navigator.pushNamed(context, '/homePage');
            },
          ),
        ),
        Spacer(),
      ],
    );
  }
}
