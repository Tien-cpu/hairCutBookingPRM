import 'package:flutter/material.dart';
import 'package:bookinghaircut/components/coustom_bottom_nav_bar.dart';
import 'package:bookinghaircut/enums.dart';

import 'components/body.dart';
import 'package:bookinghaircut/size_config.dart';

class ScheduleScreen extends StatelessWidget {
  static String routeName = "/Schedule";
  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    return Scaffold(
      body: Body(),
      bottomNavigationBar: CustomBottomNavBar(selectedMenu: MenuState.message),
    );
  }
}
