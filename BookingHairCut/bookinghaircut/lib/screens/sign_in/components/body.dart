import 'package:bookinghaircut/components/default_button.dart';
import 'package:flutter/material.dart';
import 'package:bookinghaircut/components/socal_card.dart';
import 'package:bookinghaircut/constants.dart';
import 'package:bookinghaircut/size_config.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:bookinghaircut/components/custom_surfix_icon.dart';
import 'package:bookinghaircut/screens/sign_in/components/sign_form.dart';
import 'package:bookinghaircut/components/no_account_text.dart';

class Body extends StatelessWidget {
  // const ({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SizedBox(
        child: Padding(
          padding: EdgeInsets.symmetric(
            horizontal: getProportionateScreenWidth(20),
          ),
          child: Column(
            children: [
              Text(
                "Welcome Back",
                style: TextStyle(
                  color: Colors.black,
                  fontSize: getProportionateScreenWidth(28),
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                "signin with your email and password \nor continute voi socior media",
                textAlign: TextAlign.center,
              ),
              SignForm(),
              SizedBox(height: SizeConfig.screenHeight * 0.08),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SocalCard(
                    icon: "assets/icons/google-icon.svg",
                    press: () {},
                  ),
                  SocalCard(
                    icon: "assets/icons/facebook-2.svg",
                    press: () {},
                  ),
                  SocalCard(
                    icon: "assets/icons/twitter.svg",
                    press: () {},
                  ),
                ],
              ),
              SizedBox(height: getProportionateScreenHeight(10)),
              NoAccountText(),
            ],
          ),
        ),
      ),
    );
  }
}
