import 'package:badges/badges.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:octo_image/octo_image.dart';
import 'package:flutter/cupertino.dart';

import 'package:bookinghaircut/models/service_model.dart';

class _BuildListTile extends StatelessWidget {
  final String title;
  final int price;
  final int chooseNumbers;
  final int? offerPrice;

  const _BuildListTile(
      {Key? key,
      required this.title,
      required this.price,
      this.offerPrice,
      required this.chooseNumbers})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _theme = Theme.of(context);

    return Column(
      children: [
        Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 18),
                    child: Text(
                      title,
                      style: _theme.textTheme.headline4,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 18),
                    child: Text(
                      " x " + chooseNumbers.toString() + " người",
                      style: _theme.textTheme.headline4,
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 18),
              child: offerPrice != null
                  ? Row(
                      children: [
                        Text(NumberFormat.decimalPattern().format(price) + "đ",
                            style: TextStyle(
                              color: Colors.blue,
                              fontSize: 13,
                              fontWeight: FontWeight.normal,
                              decoration: TextDecoration.lineThrough,
                            )),
                        const SizedBox(width: 5),
                        Text(
                          NumberFormat.decimalPattern().format(offerPrice) +
                              "đ",
                          style: TextStyle(
                            color: Colors.red,
                            fontSize: 15,
                            fontWeight: FontWeight.normal,
                          ),
                        )
                      ],
                    )
                  : Text(
                      NumberFormat.decimalPattern().format(price) + "đ",
                      style: TextStyle(
                        color: Colors.red,
                        fontSize: 15,
                        fontWeight: FontWeight.normal,
                      ),
                    ),
            ),
          ],
        ),
        Divider(color: _theme.unselectedWidgetColor),
      ],
    );
  }
}
