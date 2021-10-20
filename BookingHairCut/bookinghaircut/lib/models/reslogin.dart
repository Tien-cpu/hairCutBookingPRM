class reslogin {
  bool id;

  reslogin({required this.id});

  factory reslogin.fromJson(Map<String, dynamic> json) {
    var val = 'True';
    return reslogin(id: (val.toLowerCase() == json['id']));
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    return data;
  }
}
