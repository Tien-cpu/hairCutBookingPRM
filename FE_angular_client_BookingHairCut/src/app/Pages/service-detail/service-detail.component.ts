import { Component } from '@angular/core';

import { adminpage } from '../../Models/AdminHomePageModel';
import { adminservicepage } from '../../Models/AdminSalonOwnerPageModel';
import { Service } from '../../Models/Service';
import { FeedBack } from '../../Models/FeedBackModel';

import { Router } from '@angular/router';
import { FirebaseService } from '../../Services/firebase.service'
import { AccountService } from '../../Services/account.service'
import { ServiceService } from '../../Services/service.service'
import { FeedBackService } from '../../Services/feedback.service';

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
    , private serviceService : ServiceService
    , private feedBackService : FeedBackService

    ) { }

  public salonOwner : any;
  public feedback : FeedBack[] = [];
  ngOnInit() {
    let name : any = sessionStorage.getItem('service-detail');
    this.serviceService.getDataAservicePage(3).subscribe((data) => {
      this.salonOwner = data
    })
    this.feedBackService.getDataFeedBackPage(4).subscribe((data) => {
      this.feedback = data
    });
    console.log(name);
  }
  
  goHomePage(){
    this.router.navigate(['home']);
  }
  goProducpage(){
    this.router.navigate(['service-management']);
  }
  goEmployeePage(){
    this.router.navigate(['service-management']);
  }
  goUserPage(){
    this.router.navigate(['salon-profile']);
  }
}
