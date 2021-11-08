import 'package:flutter/material.dart';
import 'package:bookinghaircut/screens/cart/cart_screen.dart';

import '../../../size_config.dart';
import 'icon_btn_with_counter.dart';
import 'search_field.dart';

class BuildHeader extends StatelessWidget {
  const BuildHeader({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(
        horizontal: getProportionateScreenWidth(15),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            width: SizeConfig.screenWidth * 0.9,
            // height: 50,
            decoration: BoxDecoration(
                color: Colors.black.withOpacity(0.1),
                borderRadius: BorderRadius.circular(25)),
            child: TextField(
              onChanged: (value) => {
                //
              },
              decoration: InputDecoration(
                enabledBorder: InputBorder.none,
                focusedBorder: InputBorder.none,
                hintText: "serch name store",
                prefixIcon: Icon(Icons.search),
                contentPadding: EdgeInsets.symmetric(
                  horizontal: getProportionateScreenWidth(20),
                  vertical: getProportionateScreenWidth(9),
                ),
              ),
            ),
          ),
          // Icontbtnwithcounter(
          //   svgSrc: "assets/icons/Cart Icon.svg",
          //   press: () {},
          //   // Navigator.pushNamed(context, CartScreen.routeName),
          // ),
          // Icontbtnwithcounter(
          //   svgSrc: "assets/icons/Bell.svg",
          //   numOfitem: 3,
          //   press: () {},
          // ),
        ],
      ),
    );
  }
}
