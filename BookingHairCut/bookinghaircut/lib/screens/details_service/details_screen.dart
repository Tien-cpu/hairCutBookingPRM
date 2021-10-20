import 'package:bookinghaircut/models/service_model.dart';
import 'package:flutter/material.dart';

import '../../models/Product.dart';
import 'components/body.dart';
import 'components/custom_app_bar.dart';

class DetailsServiceScreen extends StatelessWidget {
  static String routeName = "/detailsService";

  @override
  Widget build(BuildContext context) {
    final ServiceDetailsArguments agrs =
        ModalRoute.of(context)!.settings.arguments as ServiceDetailsArguments;
    return Scaffold(
      backgroundColor: Color(0xFFF5F6F9),
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(AppBar().preferredSize.height),
        child: CustomAppBar(rating: agrs.service.rating!),
      ),
      body: Body(service: agrs.service),
    );
  }
}

class ServiceDetailsArguments {
  final ServicesModel service;

  ServiceDetailsArguments({required this.service});
}
