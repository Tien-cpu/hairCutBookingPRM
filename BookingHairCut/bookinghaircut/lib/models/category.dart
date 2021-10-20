class categorymodel {
  String icon;
  String Text;

  categorymodel({required this.icon, required this.Text});

  factory categorymodel.fromJson(Map<String, dynamic> json) {
    return categorymodel(icon: json['icon'], Text: json['text']);
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['icon'] = this.icon;
    data['text'] = this.Text;
    return data;
  }
}
