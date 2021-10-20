import 'package:bookinghaircut/constants.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:bookinghaircut/components/custom_app_bar.dart';
import '../../../size_config.dart';
import 'categories.dart';
import 'discount_banner.dart';
import 'home_header.dart';
import 'popular_product.dart';
import 'special_offers.dart';
import 'icon_btn_with_counter.dart';

class Body extends StatelessWidget {
  bool _isFromProfile = false;
  List<String> test = ['text1', 'text2'];
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: 500,
        decoration: const BoxDecoration(
            // image: DecorationImage(
            //   fit: BoxFit.cover,
            //   image: AssetImage(Assets.image1),
            // ),
            ),
        child: DefaultTabController(
          length: 3,
          child: Scaffold(
            appBar: CustomAppBar(
              context,
              title: 'Lịch Hẹn',
              enableLeading: _isFromProfile,
              backgroundColor: Colors.white,
              bottom: PreferredSize(
                preferredSize: const Size.fromHeight(50),
                child: Container(
                  height: 35,
                  width: MediaQuery.of(context).size.width,
                  margin: const EdgeInsets.symmetric(
                    horizontal: 18,
                    vertical: 12,
                  ),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(5),
                    border: Border.all(color: Colors.black),
                  ),
                  child: TabBar(
                    labelStyle: Theme.of(context)
                        .textTheme
                        .subtitle2
                        ?.copyWith(color: Colors.blueAccent),
                    indicator: BoxDecoration(
                      borderRadius: BorderRadius.circular(5),
                      border: Border.all(color: Colors.blueAccent),
                      color: Colors.blueAccent,
                    ),
                    labelColor: Colors.black,
                    unselectedLabelColor: Colors.black,
                    tabs: [
                      Tab(text: 'Đang Đặt'),
                      Tab(text: 'Đẫ Hoàn Thành'),
                      Tab(text: 'Đã Hủy'),
                    ],
                  ),
                ),
              ),
            ),
            body: TabBarView(
              children: [
                _BuildBooking(bookingmodellist: test),
                _BuildBooking(bookingmodellist: test),
                _BuildBooking(bookingmodellist: test),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _BuildBooking extends StatelessWidget {
  final List<String> bookingmodellist;

  const _BuildBooking({Key? key, required this.bookingmodellist})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    return
        // Scaffold(
        //     body: SfCalendar(
        //   view: CalendarView.month,

        //   // timeSlotViewSettings: TimeSlotViewSettings(
        //   //   startHour: 8,
        //   //   endHour: 20,
        //   //   // nonWorkingDays: <int>[DateTime.friday, DateTime.saturday]
        //   // ),
        // ));
        Text('1');
  }
}
