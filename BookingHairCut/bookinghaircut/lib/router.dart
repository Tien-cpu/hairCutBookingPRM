// import 'dart:js';

import 'dart:js';

import 'package:bookinghaircut/screens/welcome/welcom_screen.dart';
import 'package:flutter/material.dart';
import 'package:bookinghaircut/screens/sign_in/sign_in_screen.dart';
import 'package:bookinghaircut/screens/signup/sign_up_screen.dart';
import 'package:bookinghaircut/screens/forgot_password/forgot_password_screen.dart';
import 'package:bookinghaircut/screens/login_success/login_success_screen.dart';
import 'package:bookinghaircut/screens/home/home_screen.dart';
import 'package:bookinghaircut/screens/details/details_screen.dart';
import 'package:bookinghaircut/screens/profile/profile_screen.dart';
import 'package:bookinghaircut/screens/schedule/schedule.dart';
import 'package:bookinghaircut/screens/details_service/details_screen.dart';

final Map<String, WidgetBuilder> routers = {
  welcomeScreen.routeName: (context) => welcomeScreen(),
  SignInScrean.routerName: (context) => SignInScrean(),
  SignUpScreen.routeName: (context) => SignUpScreen(),
  ForgotPasswordScreen.routeName: (context) => ForgotPasswordScreen(),
  LoginSuccessScreen.routeName: (context) => LoginSuccessScreen(),
  HomeScreen.routeName: (context) => HomeScreen(),
  DetailsScreen.routeName: (context) => DetailsScreen(),
  ProfileScreen.routeName: (context) => ProfileScreen(),
  ScheduleScreen.routeName: (context) => ScheduleScreen(),
  DetailsServiceScreen.routeName: (context) => DetailsServiceScreen(),
};
