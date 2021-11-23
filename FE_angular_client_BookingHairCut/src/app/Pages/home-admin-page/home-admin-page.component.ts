import { Component } from '@angular/core';

// import { adminpage } from '../../Models/AdminHomePageModel';
import { Appoinment } from '../../Models/AppoinmentModel';

import { Router } from '@angular/router';
// import { FirebaseService } from '../../Services/firebase.service'
// import { AccountService } from '../../Services/account.service'
import { SalonAppoinmentService } from '../../Services/apponment.service'

import { User } from '../../Models/User'
@Component({
  selector: 'app-home',
  templateUrl: './home-admin-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css','./home-admin-page.component.css'
  // '../common_asset_page2/css/paper-dashboard.css',
  // '../common_asset_page2/css/bootstrap.min.css',
  // '../common_asset_page2/demo/demo.css',

  // '../common_asset_page/css/material-dashboard.css.map',
]
})

export class HomeComponent {

  constructor(private router: Router
    // , private _authService: AuthService
    // , private firebaseService : FirebaseService
    // , private accountService : AccountService
    , private salonAppoinmentService : SalonAppoinmentService
    ) { }

  // datapage : adminpage = new adminpage;
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
  public commingA : Appoinment[] = [];
  public finishA : Appoinment[] = [];
  public cancelA : Appoinment[] = [];
  ngOnInit() {
    this.salonAppoinmentService.getDataDasboardPage().subscribe((data)=>{
      this.commingA = []
      this.finishA = []
      this.cancelA = []
      data.forEach((item) => {
        if(item.status == 'comming'){
          this.commingA.push(item)
        } else if(item.status == 'finnish'){
          this.finishA.push(item)
        } else if(item.status == 'cancel'){
          this.cancelA.push(item)
        }
      })
    });
    this.selectstatus = this.ListStatus[0].key
  }
  cancelService(apoinment: Appoinment){
    this.salonAppoinmentService.postCancelDasboardPage(apoinment).subscribe((data) => console.log(data));
    console.log(apoinment)
  }
  opentab(tab:String){
    console.log(this.commingA)
    console.log(this.finishA)
    console.log(this.cancelA)
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
