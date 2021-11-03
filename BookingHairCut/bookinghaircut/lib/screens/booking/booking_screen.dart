import 'package:flutter/material.dart';
import 'package:bookinghaircut/components/coustom_bottom_nav_bar.dart';
import 'package:bookinghaircut/enums.dart';

import 'components/body.dart';
import 'package:bookinghaircut/size_config.dart';
import 'package:bookinghaircut/models/service_model.dart';
import 'components/custom_app_bar.dart';

class BookingScreen extends StatelessWidget {
  static String routeName = "/booking";
  @override
  Widget build(BuildContext context) {
    final ServiceBookingArguments agrs =
        ModalRoute.of(context)!.settings.arguments as ServiceBookingArguments;
    return Scaffold(
      backgroundColor: Color(0xFFF5F6F9),
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(AppBar().preferredSize.height),
        child: CustomAppBar(rating: agrs.service.rating!),
      ),
      body: Body(barbershopModel: agrs.service),
    );
  }
}

class ServiceBookingArguments {
  final ServicesModel service;

  ServiceBookingArguments({required this.service});
}
