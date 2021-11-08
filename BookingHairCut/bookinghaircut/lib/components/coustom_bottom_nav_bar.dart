import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:bookinghaircut/screens/home/home_screen.dart';
import 'package:bookinghaircut/screens/profile/profile_screen.dart';
import 'package:bookinghaircut/screens/schedule/schedule.dart';
import 'package:bookinghaircut/screens/love_service/love_screen.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import '../constants.dart';
import '../enums.dart';

class CustomBottomNavBar extends StatelessWidget {
  const CustomBottomNavBar({
    Key? key,
    required this.selectedMenu,
  }) : super(key: key);

  final MenuState selectedMenu;

  @override
  Widget build(BuildContext context) {
    final Color inActiveIconColor = Color(0xFFB6B6B6);
    return Container(
      padding: EdgeInsets.symmetric(vertical: 14),
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            offset: Offset(0, -15),
            blurRadius: 20,
            color: Color(0xFFDADADA).withOpacity(0.15),
          ),
        ],
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(40),
          topRight: Radius.circular(40),
        ),
      ),
      child: SafeArea(
          top: false,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              IconButton(
                icon: const Icon(FeatherIcons.home),
                onPressed: () =>
                    Navigator.pushNamed(context, HomeScreen.routeName),
              ),
              IconButton(
                icon: const Icon(FeatherIcons.bell),
                onPressed: () =>
                    Navigator.pushNamed(context, LoveScreen.routeName),
              ),
              IconButton(
                icon: const Icon(FeatherIcons.calendar),
                onPressed: () => {
                  Navigator.pushNamed(context, ScheduleScreen.routeName),
                },
              ),
              IconButton(
                icon: const Icon(FeatherIcons.user),
                onPressed: () =>
                    Navigator.pushNamed(context, ProfileScreen.routeName),
              ),
            ],
          )),
    );
  }
}
