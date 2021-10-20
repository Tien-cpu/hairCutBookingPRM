// import 'package:hairbooking/src/models/barbershop_model.dart';
// import 'package:hairbooking/src/models/category_model.dart';

class ServicesModel {
  final String? name;
  final String? barbershop;
  bool? isSelected;
  final int? numberOfUsedPeople;
  final double? rating;
  final int? price;
  final int? offerPrice;
  final String? image;
  final int? estimateTime;
  final String? description;

  ServicesModel(
      {this.name,
      this.price,
      this.barbershop,
      this.isSelected,
      this.numberOfUsedPeople,
      this.offerPrice,
      this.rating,
      this.image,
      this.estimateTime,
      this.description});
  factory ServicesModel.fromJson(Map<String, dynamic> json) {
    return ServicesModel(
      name: json['name'],
      barbershop: json['barbershop'],
      isSelected: json['isSelected'],
      numberOfUsedPeople: json['numberOfUsedPeople'],
      rating: json['rating'],
      price: json['price'],
      offerPrice: json['offerPrice'],
      image: json['image'],
      estimateTime: json['estimateTime'],
      description: json['description'],
    );
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['name'] = this.name;
    data['barbershop'] = this.barbershop;
    data['naisSelectedme'] = this.isSelected;
    data['numberOfUsedPeople'] = this.numberOfUsedPeople;
    data['rating'] = this.rating;
    data['price'] = this.price;
    data['offerPrice'] = this.offerPrice;
    data['image'] = this.image;
    data['estimateTime'] = this.estimateTime;
    data['description'] = this.description;
    return data;
  }
}