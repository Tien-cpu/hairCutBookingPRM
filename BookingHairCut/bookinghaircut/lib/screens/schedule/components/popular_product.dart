import 'package:flutter/material.dart';
import 'package:bookinghaircut/components/product_card.dart';
import 'package:bookinghaircut/models/Product.dart';
import 'package:bookinghaircut/screens/details/details_screen.dart';
import '../../../size_config.dart';
import 'section_title.dart';
import 'package:bookinghaircut/screens/welcome/welcom_screen.dart';

class PopularProducts extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding:
              EdgeInsets.symmetric(horizontal: getProportionateScreenWidth(20)),
          child: SectionTitle(title: "Popular Products", press: () {}),
        ),
        SizedBox(height: getProportionateScreenWidth(20)),
        SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: Row(
            children: [
              ...List.generate(
                demoProducts.length,
                (index) {
                  if (demoProducts[index].isPopular)
                    return ProductCard(
                      product: demoProducts[index],
                      // press: () =>
                      //     Navigator.pushNamed(context, welcomeScreen.routeName),
                    );

                  return SizedBox
                      .shrink(); // here by default width and height is 0
                },
              ),
              SizedBox(width: getProportionateScreenWidth(20)),
            ],
          ),
        )
      ],
    );
  }
}
