import { Component } from '@angular/core';

import { adminpage } from '../../Models/AdminHomePageModel';
import { adminservicepage } from '../../Models/AdminSalonOwnerPageModel';
import { notification } from '../../Models/notificationModel';

import { Router } from '@angular/router';

import { notificationService } from '../../Services/notificationService'

import { User } from '../../Models/User'
@Component({
  selector: 'app-home',
  templateUrl: './notification.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css','./notification.component.css'
  // '../common_asset_page2/css/paper-dashboard.css',
  // '../common_asset_page2/css/bootstrap.min.css',
  // '../common_asset_page2/demo/demo.css',

  // '../common_asset_page/css/material-dashboard.css.map',
]
})

export class notificationComponent {

  constructor(private router: Router
    // , private _authnotification: Authnotification
    , private notificationService : notificationService
    ) { }

  datapage : adminpage = new adminpage;
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
  listnotification : notification[] = []
  ngOnInit() {
    this.notificationService.getDatanotificationPage().subscribe((data) => {
      this.listnotification = data
      console.log(this.listnotification)
      // console.log(data)
    })
    this.selectstatus = this.ListStatus[0].key
    console.log(this.listnotification)
  }
  viewDetail(sv : notification){
    console.log(sv)
    sessionStorage.setItem('service-detail', String(sv.id));
    this.router.navigate(['service-detail']);
  }
  gotoCreatenotification(){
    this.router.navigate(['service-create']);
  }
  opentab(tab:String){
    console.log(this.listnotification)
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
    this.router.navigate(['notification']);
  }
  goUserPage(){
    this.router.navigate(['salon-profile']);
  }
}
