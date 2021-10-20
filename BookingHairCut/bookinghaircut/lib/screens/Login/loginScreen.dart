import 'package:flutter/material.dart';
import 'package:bookinghaircut/constants.dart';
import 'package:bookinghaircut/screens/signInOrSignUp/signInOrSignUpSceen.dart';
import 'package:bookinghaircut/screens/home/home_screen.dart';

class LoginScreen extends StatelessWidget {
  Color stylecolor = Colors.black;
  @override
  Widget build(BuildContext context) {
    stylecolor = (MediaQuery.of(context).platformBrightness == Brightness.light)
        ? Colors.white
        : Colors.black;
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: <Widget>[
            Expanded(
              flex: 1,
              child: Image.asset(
                MediaQuery.of(context).platformBrightness == Brightness.light
                    ? "assets/images/Logo_light.png"
                    : "assets/images/Logo_dark.png",
                height: 146,
              ),
            ),
            Expanded(
              child: Column(
                children: <Widget>[
                  Padding(
                    padding: EdgeInsets.only(top: 15),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Expanded(
                          child: TextFormField(
                            obscureText: false,
                            style: const TextStyle(
                              color: Colors.black,
                            ),
                            decoration: new InputDecoration(
                              icon: new Icon(
                                Icons.lock,
                                color: kPrimaryColor,
                              ),
                              border: InputBorder.none,
                              hintText: "Email Address",
                              hintStyle: const TextStyle(
                                color: Colors.black45,
                                fontSize: 15.0,
                              ),
                              contentPadding: const EdgeInsets.only(
                                  top: 30.0,
                                  right: 30.0,
                                  bottom: 30.0,
                                  left: 5.0),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(top: 10),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Expanded(
                          child: TextFormField(
                            obscureText: true,
                            style: const TextStyle(
                              color: Colors.black,
                            ),
                            decoration: new InputDecoration(
                              icon: new Icon(
                                Icons.lock,
                                color: kPrimaryColor,
                              ),
                              border: InputBorder.none,
                              hintText: "passWord",
                              hintStyle: const TextStyle(
                                  color: Colors.black54, fontSize: 15.0),
                              contentPadding: const EdgeInsets.only(
                                  top: 30.0,
                                  right: 30.0,
                                  bottom: 30.0,
                                  left: 5.0),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: EdgeInsets.only(top: 10),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  FittedBox(
                    child: TextButton(
                      onPressed: () => Navigator.pop(context),
                      child: Row(
                        children: [
                          Icon(
                            Icons.arrow_back_ios,
                            size: 16,
                            color: Theme.of(context)
                                .textTheme
                                .bodyText1!
                                .color!
                                .withOpacity(0.8),
                          ),
                          Text(
                            "Back",
                            style:
                                Theme.of(context).textTheme.bodyText1!.copyWith(
                                      color: Theme.of(context)
                                          .textTheme
                                          .bodyText1!
                                          .color!
                                          .withOpacity(0.8),
                                    ),
                          ),
                          SizedBox(
                            width: kDefaultPadding / 8,
                          ),
                        ],
                      ),
                    ),
                  ),
                  Spacer(),
                  FittedBox(
                    child: TextButton(
                      onPressed: () => Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => HomeScreen())),
                      child: Row(
                        children: [
                          Text(
                            "Login",
                            style:
                                Theme.of(context).textTheme.bodyText1!.copyWith(
                                      color: Theme.of(context)
                                          .textTheme
                                          .bodyText1!
                                          .color!
                                          .withOpacity(0.8),
                                    ),
                          ),
                          SizedBox(
                            width: kDefaultPadding / 8,
                          ),
                          Icon(
                            Icons.arrow_forward_ios,
                            size: 16,
                            color: Theme.of(context)
                                .textTheme
                                .bodyText1!
                                .color!
                                .withOpacity(0.8),
                          )
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
