import 'package:flutter/material.dart';
import 'package:bookinghaircut/models/Product.dart';
import 'package:bookinghaircut/models/service_model.dart';
import '../../../constants.dart';
import '../../../size_config.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:octo_image/octo_image.dart';

class ProductImages extends StatefulWidget {
  const ProductImages({
    Key? key,
    required this.service,
  }) : super(key: key);

  final ServicesModel service;

  @override
  _ProductImagesState createState() => _ProductImagesState(service: service);
}

class _ProductImagesState extends State<ProductImages> {
  _ProductImagesState({
    required this.service,
  });
  ServicesModel service;
  int selectedImage = 0;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          width: getProportionateScreenWidth(238),
          child: OctoImage(
            width: 238,
            height: 300,
            fit: BoxFit.cover,
            image: CachedNetworkImageProvider(
              service.image ?? '',
            ),
          ), // child: AspectRatio(
          //   aspectRatio: 1,
          //   // child: Hero(
          //   // tag: widget.service.name.toString(),
          //   // child: Image.asset(widget.product.images[selectedImage]),
          //   // ),
          // ),
        ),
        // SizedBox(height: getProportionateScreenWidth(20)),
        // Row(
        //   mainAxisAlignment: MainAxisAlignment.center,
        //   // children: [
        //   // ...List.generate(widget.product.images.length,
        //   // (index) => buildSmallProductPreview(index)),
        //   // ],
        // )
      ],
    );
  }

  GestureDetector buildSmallProductPreview(int index) {
    return GestureDetector(
      onTap: () {
        setState(() {
          selectedImage = index;
        });
      },
      child: AnimatedContainer(
        duration: defaultDuration,
        margin: EdgeInsets.only(right: 15),
        padding: EdgeInsets.all(8),
        height: getProportionateScreenWidth(48),
        width: getProportionateScreenWidth(48),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
              color: kPrimaryColor.withOpacity(selectedImage == index ? 1 : 0)),
        ),
        // child: Image.asset(widget.product.images[index]),
      ),
    );
  }
}
