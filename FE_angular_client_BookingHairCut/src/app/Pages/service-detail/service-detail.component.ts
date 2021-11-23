import { Component } from '@angular/core';

import { adminpage } from '../../Models/AdminHomePageModel';
import { adminservicepage } from '../../Models/AdminSalonOwnerPageModel';
import { Service } from '../../Models/Service';
import { FeedBack } from '../../Models/FeedBackModel';
import { Category } from '../../Models/CategoryModel';

import { Router } from '@angular/router';
import { FirebaseService } from '../../Services/firebase.service'
import { AccountService } from '../../Services/account.service'
import { ServiceService } from '../../Services/service.service'
import { FeedBackService } from '../../Services/feedback.service';
import { SalonCategoryService } from '../../Services/cartegory.service'

import { User } from '../../Models/User'
@Component({
  selector: 'app-home',
  templateUrl: './service-detail.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css','./service-detail.component.css'
  // '../common_asset_page2/css/paper-dashboard.css',
  // '../common_asset_page2/css/bootstrap.min.css',
  // '../common_asset_page2/demo/demo.css',

  // '../common_asset_page/css/material-dashboard.css.map',
]
})

export class ServiceDetailComponent {

  constructor(private router: Router
    // , private _authService: AuthService
    , private firebaseService : FirebaseService
    , private accountService : AccountService
    , private salonCategoryService : SalonCategoryService
    , private serviceService : ServiceService
    , private feedBackService : FeedBackService

    ) { }

  public salonOwner : any;
  public feedback : FeedBack[] = [];
  public category : Category[] = [];
  ngOnInit() {
    let name : any = sessionStorage.getItem('service-detail');
    this.serviceService.getDataAservicePage(name).subscribe((data) => {
      this.salonOwner = data
    })
    this.feedBackService.getDataFeedBackPage(name).subscribe((data) => {
      this.feedback = data
    });
    this.salonCategoryService.getDataCategoryPage().subscribe((data) => {
      this.category = data
      console.log(data);
    });
    console.log(name);
  }
  goupdateservice(){
    this.serviceService.postUpdateService(this.salonOwner).subscribe((data) => console.log(data));
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
