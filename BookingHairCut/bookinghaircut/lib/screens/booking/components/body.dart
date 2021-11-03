import 'package:bookinghaircut/constants.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import 'dart:math';
import '../../../size_config.dart';
import 'package:badges/badges.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:octo_image/octo_image.dart';
import 'package:flutter/cupertino.dart';
import 'package:bookinghaircut/components/custom_app_bar.dart';
import 'package:bookinghaircut/screens/booking/components/build_header.dart';
import 'package:bookinghaircut/screens/booking/components/build_list_tile.dart';
import 'package:bookinghaircut/screens/booking/components/custom_elevated_button.dart';
import 'package:bookinghaircut/screens/booking/components/build_date.dart';
import 'package:bookinghaircut/screens/booking/components/datetime_picker_widget.dart';
import "package:flutter_feather_icons/src/icon_data.dart";
import 'package:flutter_rating_bar/flutter_rating_bar.dart';

import 'package:bookinghaircut/screens/booking/components/button_widget.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import 'package:bookinghaircut/models/service_model.dart';
import 'package:bookinghaircut/models/slot_model.dart';
import 'package:bookinghaircut/screens/home/home_screen.dart';
import 'headerBody.dart';
import 'build_list_tile.dart';

class Body extends StatelessWidget {
  final ServicesModel barbershopModel;
  const Body({Key? key, required this.barbershopModel}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    final _theme = Theme.of(context);
    return SafeArea(
      child: SingleChildScrollView(
          child: Container(
              width: MediaQuery.of(context).size.width,
              height: 660,
              margin: const EdgeInsets.only(bottom: 15),
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(5),
                color: _theme.cardColor,
              ),
              child: BookingDetailScreen(barbershopModel: barbershopModel))),
    );
  }
}

class BuildBody extends StatelessWidget {
  final ServicesModel service;

  const BuildBody({Key? key, required this.service}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _theme = Theme.of(context);
    return Container(
        width: MediaQuery.of(context).size.width,
        height: 960,
        margin: const EdgeInsets.only(bottom: 15),
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(5),
          color: _theme.cardColor,
        ),
        child: BookingDetailScreen(barbershopModel: service));
  }
}

class BookingDetailScreen extends StatefulWidget {
  final ServicesModel barbershopModel;
  const BookingDetailScreen({Key? key, required this.barbershopModel})
      : super(key: key);

  @override
  _BookingDetailScreenState createState() =>
      _BookingDetailScreenState(barbershopModel: barbershopModel);
}

class _BookingDetailScreenState extends State<BookingDetailScreen> {
  final ServicesModel barbershopModel;

  late String _dateOfBirth = '';
  late String _time = '';

  Future<void> selectDate(BuildContext context) async {
    List<int>? workingDay = barbershopModel.workingDay;
    final picked = await showDatePicker(
      selectableDayPredicate: (DateTime val) =>
          workingDay!.contains(val.weekday) ? true : false,
      context: context,
      locale: const Locale("vi", "VN"),
      initialDate: workingDay!.contains(DateTime.now().weekday)
          ? DateTime.now()
          : DateTime(
              DateTime.now().year,
              DateTime.now().month,
              DateTime.now().weekday == 6
                  ? DateTime.now().day + 2
                  : DateTime.now().day + 1),
      firstDate: workingDay.contains(DateTime.now().weekday)
          ? DateTime.now()
          : DateTime(
              DateTime.now().year,
              DateTime.now().month,
              DateTime.now().weekday == 6
                  ? DateTime.now().day + 2
                  : DateTime.now().day + 1),
      lastDate: DateTime(
          DateTime.now().year, DateTime.now().month + 1, DateTime.now().day),
      builder: (BuildContext context, Widget? child) {
        return Theme(
          data: ThemeData.dark().copyWith(
            colorScheme: ColorScheme.dark(
              primary: Colors.deepPurple,
              onPrimary: Colors.white,
              surface: Colors.white,
              onSurface: Colors.black,
            ),
            dialogBackgroundColor: Colors.white,
          ),
          child: child!,
        );
      },
    );
    if (picked != null) {
      setState(() {
        slots = [];
        final startTime = TimeOfDay.fromDateTime(
            DateFormat.jm().parse(barbershopModel.open!));
        final endTime = TimeOfDay.fromDateTime(
            DateFormat.jm().parse(barbershopModel.close!));
        final step = Duration(minutes: 30);

        final timesOfDay = getTimes(startTime, endTime, step);
        final times = timesOfDay.map((tod) => tod.format(context)).toList();
        for (int i = 0; i < times.length; i++) {
          SlotModel slot;
          if (toDouble(timesOfDay.elementAt(i)) <
              toDouble(TimeOfDay.fromDateTime(DateTime.now()))) {
            slot = SlotModel(
                id: i,
                isAvailable: false,
                isBooked: Random().nextBool(),
                isSelected: false,
                time: times[i]);
          } else {
            slot = SlotModel(
                id: i,
                isAvailable: true,
                isBooked: Random().nextBool(),
                isSelected: false,
                time: times[i]);
          }
          if (picked.weekday == 3) {
            if (toDouble(timesOfDay.elementAt(i)) >=
                    toDouble(TimeOfDay(hour: 14, minute: 0)) &&
                toDouble(timesOfDay.elementAt(i)) <=
                    toDouble(TimeOfDay(hour: 16, minute: 0))) {
              slot.isSale = true;
            } else {
              slot.isSale = false;
            }
          }
          slots.add(slot);
        }
        _dateOfBirth = DateFormat('dd-MM-yyyy').format(picked);
        _isDatePicked = true;
      });
    }
  }

  int total = 0;
  Widget _buildChosenServices() {
    final _theme = Theme.of(context);
    total = 0;

    return Container(
      width: MediaQuery.of(context).size.width,
      margin: const EdgeInsets.symmetric(horizontal: 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(15),
        border: Border.all(color: _theme.primaryColor),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.max,
        children: [
          Container(
            width: MediaQuery.of(context).size.width,
            height: 35,
            decoration: BoxDecoration(
                color: _theme.primaryColor,
                borderRadius: const BorderRadius.only(
                  topRight: Radius.circular(14),
                  topLeft: Radius.circular(14),
                )),
            child: Center(
              child: Text(
                "Dịch vụ đã chọn",
                style: _theme.textTheme.bodyText2?.copyWith(
                  color: Colors.white,
                ),
              ),
            ),
          ),
          const SizedBox(height: 15),
          SizedBox(height: 165, child: BuildHeader(service: barbershopModel)),
        ],
      ),
    );
  }

  Iterable<TimeOfDay> getTimes(
      TimeOfDay startTime, TimeOfDay endTime, Duration step) sync* {
    var hour = startTime.hour;
    var minute = startTime.minute;

    do {
      yield TimeOfDay(hour: hour, minute: minute);
      minute += step.inMinutes;
      while (minute >= 60) {
        minute -= 60;
        hour++;
      }
    } while (hour < endTime.hour ||
        (hour == endTime.hour && minute <= endTime.minute));
  }

  Future<DateTime?> pickDate(BuildContext context) async {
    final initialDate = DateTime.now();
    final newDate = await showDatePicker(
      context: context,
      initialDate: dateTime ?? initialDate,
      firstDate: DateTime(DateTime.now().year - 5),
      lastDate: DateTime(DateTime.now().year + 5),
    );

    if (newDate == null) return null;

    return newDate;
  }

  DateTime? dateTime;
  Future pickDateTime(BuildContext context) async {
    final date = await pickDate(context);
    if (date == null) return;

    final time = await pickTime(context);
    if (time == null) return;

    setState(() {
      dateTime = DateTime(
        date.year,
        date.month,
        date.day,
        time.hour,
        time.minute,
      );
    });
  }

  String getpickTime() {
    if (dateTime == null) {
      return 'Select DateTime';
    } else {
      return DateFormat('MM/dd/yyyy HH:mm').format(dateTime!);
    }
  }

  Future<TimeOfDay?> pickTime(BuildContext context) async {
    final initialTime = TimeOfDay(hour: 9, minute: 0);
    final newTime = await showTimePicker(
      context: context,
      initialTime: dateTime != null
          ? TimeOfDay(hour: dateTime!.hour, minute: dateTime!.minute)
          : initialTime,
    );

    if (newTime == null) return null;

    return newTime;
  }

  List<SlotModel> slots = [];
  String selectedSlot = '';
  double toDouble(TimeOfDay myTime) => myTime.hour + myTime.minute / 60.0;
  Widget _buildSlot(List<SlotModel> slots) {
    final _theme = Theme.of(context);
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Chọn giờ",
            style: _theme.textTheme.headline4,
          ),
          const SizedBox(height: 12),
          ButtonHeaderWidget(
            title: 'DateTime',
            text: getpickTime(),
            onClicked: () => pickDateTime(context),
          ),
          const SizedBox(height: 25),
        ],
      ),
    );
  }

  _BookingDetailScreenState({required this.barbershopModel});
  late TextEditingController _couponController;
  bool _isDatePicked = false;

  @override
  void initState() {
    super.initState();
    _couponController = TextEditingController(text: '');
  }

  @override
  Widget build(BuildContext context) {
    final _theme = Theme.of(context);

    return Scaffold(
      // appBar: CustomAppBar(
      //   context,
      //   title: "Chi tiết đặt lịch",
      //   backgroundColor: _theme.primaryColor,
      //   leadingIconColor: Colors.white,
      //   titleColor: Colors.white,
      // ),
      body: ListView(
        children: [
          // _BuildHeader(
          // barbershopModel: barbershopModel,
          // ),
          const SizedBox(height: 25),
          _buildChosenServices(),
          const SizedBox(height: 25),
          // _BuildDate(
          // onSelectDateTap: () => selectDate(context), date: _dateOfBirth)
          Padding(
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
                DatetimePickerWidget(),
              ],
            ),
          ),
          const SizedBox(height: 25),
          if (_isDatePicked == true) _buildSlot(slots) else const SizedBox(),
          if (selectedSlot != '' &&
              toDouble(TimeOfDay.fromDateTime(
                      DateFormat.jm().parse(selectedSlot))) >=
                  toDouble(TimeOfDay(hour: 14, minute: 0)) &&
              toDouble(TimeOfDay.fromDateTime(
                      DateFormat.jm().parse(selectedSlot))) <=
                  toDouble(TimeOfDay(hour: 16, minute: 0)))
            Container(
              padding: const EdgeInsets.all(15),
              margin: const EdgeInsets.symmetric(horizontal: 8),
              decoration: BoxDecoration(
                border: Border.all(
                  color: Colors.blue,
                ),
                borderRadius: BorderRadius.circular(15),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "Tổng cộng",
                    style: _theme.textTheme.headline3,
                  ),
                  Text(
                    NumberFormat.decimalPattern().format(total * 0.75),
                    style: _theme.textTheme.headline3
                        ?.copyWith(color: Colors.black),
                  ),
                ],
              ),
            )
          else
            Container(
              padding: const EdgeInsets.all(15),
              margin: const EdgeInsets.symmetric(horizontal: 8),
              decoration: BoxDecoration(
                border: Border.all(
                  color: Colors.blue,
                ),
                borderRadius: BorderRadius.circular(15),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "Tổng cộng",
                    style: _theme.textTheme.headline3,
                  ),
                  Text(
                    NumberFormat.decimalPattern().format(total),
                    style: _theme.textTheme.headline3
                        ?.copyWith(color: Colors.black),
                  ),
                ],
              ),
            ),
          const SizedBox(height: 25),
          CustomElevatedButton(
            onTap: () => Navigator.pushNamed(context, HomeScreen.routeName),
            label: "Đặt lịch",
            margin: const EdgeInsets.symmetric(horizontal: 8),
          ),
          const SizedBox(height: 25),
        ],
      ),
    );
  }
}
