import 'package:bookinghaircut/models/appointment_model.dart';
import 'package:bookinghaircut/service/AppointmentService.dart';
import 'package:flutter/material.dart';
import 'package:bookinghaircut/components/product_card.dart';
import 'package:bookinghaircut/models/appointment_model.dart';
import 'package:bookinghaircut/screens/details/details_screen.dart';
import 'package:bookinghaircut/screens/details_service/details_screen.dart';
import '../../../size_config.dart';
import 'section_title.dart';
import 'package:bookinghaircut/screens/welcome/welcom_screen.dart';
import 'package:octo_image/octo_image.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
import "package:flutter_feather_icons/src/icon_data.dart";
// import 'package:intl/intl.dart';
import 'package:bookinghaircut/service/serviceService.dart';

class PopularService extends StatelessWidget {
  final netWorkRequestAppointmentService net =
      netWorkRequestAppointmentService();
  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: net.listAppointmentPending(),
      builder:
          (BuildContext context, AsyncSnapshot<List<AppointmentModel>> snap) {
        if (snap.hasData) {
          List<AppointmentModel> services = snap.requireData;
          if (!services.isEmpty) {
            return Column(
              children: [
                const SizedBox(height: 12),
                SizedBox(
                  child: ListView.builder(
                    itemCount: services.length,
                    shrinkWrap: true,
                    physics: const ScrollPhysics(),
                    itemBuilder: (context, index) {
                      final service = services[index];
                      if (service.services == '' || service.services == null) {
                        return Container(
                          width: MediaQuery.of(context).size.width,
                          margin: const EdgeInsets.only(bottom: 12),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(8),
                            color: Colors.blueAccent,
                          ),
                          height: 45,
                          child: ListTile(
                            title: Text(service.barbershop),
                          ),
                        );
                      }
                      return
                          // Text(service.barbershop);
                          _BuildServiceCard(service: service);
                    },
                  ),
                ),
              ],
            );
            // return Text(postl.length.toString());
          }
        }
        return CircularProgressIndicator();
      },
    );
  }
}

class _BuildServiceCard extends StatelessWidget {
  final AppointmentModel service;

  const _BuildServiceCard({Key? key, required this.service}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    final _theme = Theme.of(context);

    return Container(
      width: 200,
      height: 160,
      margin: const EdgeInsets.only(bottom: 15),
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(5),
        color: Colors.blue.shade100,
      ),
      child: InkWell(
        onTap: () => {},
        borderRadius: BorderRadius.circular(8),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(8),
              child: OctoImage(
                width: 100,
                height: 100,
                fit: BoxFit.cover,
                image: CachedNetworkImageProvider(
                  service.img,
                ),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: Text(
                          service.services,
                          maxLines: 1,
                          textAlign: TextAlign.left,
                          overflow: TextOverflow.ellipsis,
                          style: _theme.textTheme.headline6,
                        ),
                      ),
                      const SizedBox(width: 15),
                      // service.rating! > 0 && service.rating != null
                      //     ? RatingBarIndicator(
                      //         rating: service.rating ?? 0,
                      //         itemBuilder: (context, index) => Icon(
                      //           Icons.star,
                      //           color: Colors.amber,
                      //         ),
                      //         itemCount: 5,
                      //         itemSize: 18.0,
                      //         direction: Axis.horizontal,
                      //       )
                      //     : const SizedBox()
                    ],
                  ),
                  const SizedBox(height: 5),
                  Text(
                    service.barbershop,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                    style: _theme.textTheme.subtitle2,
                  ),
                  const SizedBox(height: 5),
                  Row(
                    children: [
                      Row(children: [
                        Icon(
                          FeatherIconData(0xe993),
                          // Icons.access_alarms,
                          color: _theme.primaryColor,
                          size: 5,
                        ),
                        const SizedBox(width: 5),
                        Text(
                          service.date,
                          style: _theme.textTheme.subtitle2,
                        )
                      ]),
                      const SizedBox(width: 5),
                      Text(
                        "|",
                        style: _theme.textTheme.subtitle2,
                      ),
                      const SizedBox(width: 5),
                      Expanded(
                        child: Text(
                          service.time,
                          overflow: TextOverflow.ellipsis,
                          maxLines: 1,
                          style: _theme.textTheme.subtitle2,
                        ),
                      )
                    ],
                  ),
                  const SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          Text(
                            service.totalPrice.toString() + "??",
                            style: TextStyle(
                              color: Color(0xFFFFB74D),
                              fontSize: 18,
                              fontWeight: FontWeight.normal,
                            ),
                          ),
                        ],
                      ),
                    ],
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
