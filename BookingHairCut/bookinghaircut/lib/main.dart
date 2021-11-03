import 'package:bookinghaircut/screens/welcome/welcom_screen.dart';
import 'package:bookinghaircut/theme.dart';
import 'package:flutter/material.dart';
import 'package:bookinghaircut/router.dart';

//import test screan
import 'package:bookinghaircut/screens/profile/profile_screen.dart';
import 'package:bookinghaircut/size_config.dart';
// import "package:http/http.dart";

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Booking HairCut',
      debugShowCheckedModeBanner: false,
      theme: theme(),
      // lightThemeData(context),
      darkTheme: darkThemeData(context),
      initialRoute: welcomeScreen.routeName,
      routes: routers,
    );
  }
}
 