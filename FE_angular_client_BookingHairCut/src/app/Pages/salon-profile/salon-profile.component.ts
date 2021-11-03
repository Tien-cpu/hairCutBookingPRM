import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { adminpage } from '../../Models/AdminHomePageModel';

import { Router } from '@angular/router';
import { FirebaseService } from '../../Services/firebase.service'
import { AccountService } from '../../Services/account.service'
import { SalonProfileService } from '../../Services/salonOwner'

import { SalonProfile } from '../../Models/SalonOwnerModel'
@Component({
  selector: 'salon-profile',
  templateUrl: './salon-profile.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css','./salon-profile.component.css'
]
})
export class SalonProfileComponent {

  constructor(private router: Router
    // , private _authService: AuthService
    , private firebaseService : FirebaseService
    , private accountService : AccountService
    , private salonProfileService : SalonProfileService
    ) { }
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  public ListDate : 
    {
      date : string , id : number, status: boolean
    }[] = [
      {
        date : 'thứ 2' , id : 2, status : true
      },
      {
        date : 'thứ 3' , id : 3, status : false
      },
      {
        date : 'thứ 4' , id : 4, status : true
      },
      {
        date : 'thứ 5' , id : 5, status : false
      },
      {
        date : 'thứ 6' , id : 6, status : true
      },
      {
        date : 'thứ 7' , id : 7, status : true
      },
      {
        date : 'chủ nhật' , id : 8, status : true
      },
    ]
  
  public salon : SalonProfile = {
    id: 0,
    Address: '',
    Description: '',
    closetime: '',
    email: '',
    imageAvatar: '',
    imageBackground: '',
    name: '',
    opentime: '',
    phonenumber: '',
    ratingSalon: '',
    totalfeedback: '',
    totalfinish: '',
    workDay: [],
  } ;
  ListStatus: {
    "value" : string,
    "key": string,
    "class" : string
  }[] = [
    {
      key: 'all',
      value: 'Tất cả',
      class: ''
    },
    {
      key: 'close',
      value: 'Ngừng Hoạt Đọng',
      class: ''
    },
    {
      key: 'open',
      value: 'Hoạt Đọng',
      class: 'selected'
    },
  ]
  nameStoreSearch: string = '';
  test: {id : string, name :string}[] = [];
  public nameStore:string="";
  public addressStore:string="";
  public selectedCity: string = '';
  public selectedDistrict: string = '';
  public urlNextpage: string = '';
  public urlPreviouspage: string = '';
  public urlCurrentpage: string = '';
  public currentPage: number = 0;
  public totalPages: number = 0;
  public selectstatus: string = '';
  displayddl:string = 'block';
  displayddl2:string = 'none';
  displayddl3:string = 'none';
  activeddl:string= 'active';
  activeddl2:string= '';
  activeddl3:string= '';
  ngOnInit() {
    this.salonProfileService.GetSalonprofileByID(1).subscribe(
      (data : SalonProfile) => {
        console.log(data)
        this.salon = data
      }
    )
    this.selectstatus = this.ListStatus[0].key
    console.log(this.salon)
  }
  updatesalon(){
    console.log(this.salon)
  }
  opentab(tab:String){
    if(tab === 'DaDat'){
      this.displayddl = 'block';
      this.displayddl2 = 'none';
      this.displayddl3 = 'none';
      this.activeddl = 'active';
      this.activeddl2 = '';
      this.activeddl3 = '';
    }else if(tab === 'HoanThanh'){
      this.displayddl = 'none';
      this.displayddl2 = 'block';
      this.displayddl3 = 'none';
      this.activeddl = '';
      this.activeddl2 = 'active';
      this.activeddl3 = '';
    }else if(tab === 'DaHuy'){
      this.displayddl = 'none';
      this.displayddl2 = 'none';
      this.displayddl3 = 'block';
      this.activeddl = '';
      this.activeddl2 = '';
      this.activeddl3 = 'active';
    }
  }
  goHomePage(){
    this.router.navigate(['home']);
  }
  goProducpage(){
    this.router.navigate(['service-management']);
  }
  goEmployeePage(){
    this.router.navigate(['employee-page']);
  }
  goUserPage(){
    this.router.navigate(['user-page']);
  }
}
