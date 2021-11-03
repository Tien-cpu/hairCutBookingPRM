import 'package:badges/badges.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:octo_image/octo_image.dart';
import 'package:flutter/cupertino.dart';

class _BuildDate extends StatelessWidget {
  final VoidCallback onSelectDateTap;
  final String date;

  const _BuildDate({
    Key? key,
    required this.onSelectDateTap,
    required this.date,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    final _theme = Theme.of(context);

    return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: 12,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Chọn ngày",
            style: _theme.textTheme.headline4,
          ),
          const SizedBox(height: 12),
          InkWell(
            onTap: onSelectDateTap,
            child: Container(
              width: MediaQuery.of(context).size.width,
              height: 45,
              padding: const EdgeInsets.symmetric(
                horizontal: 12,
              ),
              decoration: BoxDecoration(
                color: _theme.cardColor,
                borderRadius: BorderRadius.circular(8),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    (date == '') ? "Chọn ngày" : date,
                    style: _theme.textTheme.subtitle1,
                  ),
                  const Icon(Icons.date_range),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
