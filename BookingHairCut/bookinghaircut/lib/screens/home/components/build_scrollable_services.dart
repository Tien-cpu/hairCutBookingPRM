import 'package:bookinghaircut/models/service_model.dart';
import 'package:flutter/material.dart';
import 'package:bookinghaircut/components/product_card.dart';
import 'package:bookinghaircut/models/Product.dart';
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
  // final List<ServicesModel> services = [
  //   ServicesModel(
  //       name: "Uốn Gợn Sóng",
  //       description: "Tóc bồng bềnh, gợn sóng",
  //       image:
  //           'https://ihsvn.com/wp-content/uploads/2020/07/salon-toc-dep-bac-nhat-tphcm-10.jpg',
  //       numberOfUsedPeople: 500,
  //       price: 300000,
  //       offerPrice: 250000,
  //       rating: 4.4,
  //       isSelected: false,
  //       barbershop: "Hair Salon Minh Dũng"),
  //   ServicesModel(
  //       name: "Duỗi thẳng tóc",
  //       description: "Tóc xuôn mượt",
  //       image:
  //           'https://niceshop.vn/wp-content/uploads/2020/03/cach-cham-soc-toc-duoi-tai-nha.jpg',
  //       numberOfUsedPeople: 0,
  //       price: 200000,
  //       rating: 0,
  //       isSelected: false,
  //       barbershop: "Hair Salon Minh Dũng"),
  //   ServicesModel(
  //       name: "Combo Uốn + Phục Hồi",
  //       description: "Uốn gợn sóng và phục hồi tóc",
  //       image:
  //           'https://oms.hotdeal.vn/images/editors/sources/000339652064/339652-339652-body-bs%20(6).jpg',
  //       numberOfUsedPeople: 25,
  //       price: 500000,
  //       offerPrice: 400000,
  //       rating: 4.6,
  //       isSelected: false,
  //       barbershop: "Hair Salon Minh Dũng"),
  //   ServicesModel(
  //       name: "Combo Nhuộm + Phục Hồi",
  //       description: "Nhuộm tóc với nhiều màu đa dạng",
  //       image:
  //           'https://toplist.vn/images/800px/hair-salon-hieu-trang-576089.jpg',
  //       numberOfUsedPeople: 30,
  //       price: 1000000,
  //       offerPrice: 850000,
  //       rating: 4.9,
  //       isSelected: false,
  //       barbershop: "Hair Salon Minh Dũng"),
  // ];
  final netWorkRequestService net = netWorkRequestService();
  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: net.letcategory(),
      builder: (BuildContext context, AsyncSnapshot<List<ServicesModel>> snap) {
        if (snap.hasData) {
          List<ServicesModel> services = snap.requireData;
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
                    if (service.name == '' || service.name == null) {
                      return Container(
                        width: MediaQuery.of(context).size.width,
                        margin: const EdgeInsets.only(bottom: 12),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(8),
                          color: Colors.blueAccent,
                        ),
                        height: 45,
                        child: ListTile(
                          title: Text(service.name ?? 'No data'),
                        ),
                      );
                    }
                    return _BuildServiceCard(service: service);
                  },
                ),
              ),
            ],
          );
          // return Text(postl.length.toString());
        }
        return CircularProgressIndicator();
      },
    );
    // return Column(
    //   children: [
    //     const SizedBox(height: 12),
    //     SizedBox(
    //       child: ListView.builder(
    //         itemCount: services.length,
    //         shrinkWrap: true,
    //         physics: const ScrollPhysics(),
    //         itemBuilder: (context, index) {
    //           final service = services[index];
    //           if (service.name == '' || service.name == null) {
    //             return Container(
    //               width: MediaQuery.of(context).size.width,
    //               margin: const EdgeInsets.only(bottom: 12),
    //               decoration: BoxDecoration(
    //                 borderRadius: BorderRadius.circular(8),
    //                 color: Colors.blueAccent,
    //               ),
    //               height: 45,
    //               child: ListTile(
    //                 title: Text(service.name ?? 'No data'),
    //               ),
    //             );
    //           }
    //           return _BuildServiceCard(service: service);
    //         },
    //       ),
    //     ),
    //   ],
    // );
  }
}

class _BuildServiceCard extends StatelessWidget {
  final ServicesModel service;

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
        color: _theme.cardColor,
      ),
      child: InkWell(
        onTap: () => Navigator.pushNamed(
          context,
          DetailsServiceScreen.routeName,
          arguments: ServiceDetailsArguments(service: service),
        ),
        // Get.toNamed<dynamic>(
        //   Routes.barbershop,
        //   arguments: service.barbershop,
        // ),
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
                  service.image ?? '',
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
                          service.name ?? '',
                          maxLines: 1,
                          textAlign: TextAlign.left,
                          overflow: TextOverflow.ellipsis,
                          style: _theme.textTheme.headline4,
                        ),
                      ),
                      const SizedBox(width: 15),
                      service.rating! > 0 && service.rating != null
                          ? RatingBarIndicator(
                              rating: service.rating ?? 0,
                              itemBuilder: (context, index) => Icon(
                                Icons.star,
                                color: Colors.amber,
                              ),
                              itemCount: 5,
                              itemSize: 18.0,
                              direction: Axis.horizontal,
                            )
                          : const SizedBox()
                    ],
                  ),
                  const SizedBox(height: 5),
                  Text(
                    service.description ?? '',
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
                          '10 ' + "km",
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
                          service.barbershop!,
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
                          service.offerPrice != null
                              ? Row(
                                  children: [
                                    Text(service.offerPrice.toString() + "đ",
                                        style: TextStyle(
                                          color: Color(0xFFC1C1C1),
                                          fontSize: 15,
                                          fontWeight: FontWeight.normal,
                                          decoration:
                                              TextDecoration.lineThrough,
                                        )),
                                    const SizedBox(width: 5),
                                    Text(
                                      service.offerPrice.toString() + "đ",
                                      style: TextStyle(
                                        color: Color(0xFFFFB74D),
                                        fontSize: 18,
                                        fontWeight: FontWeight.normal,
                                      ),
                                    )
                                  ],
                                )
                              : Text(
                                  service.offerPrice.toString() + "đ",
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
