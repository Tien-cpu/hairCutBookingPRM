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
import { SalonCategoryService } from '../../Services/cartegory.service'
import { FeedBackService } from '../../Services/feedback.service';

import { User } from '../../Models/User'
@Component({
  selector: 'app-home',
  templateUrl: './service-create.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css','./service-create.component.css'
  // '../common_asset_page2/css/paper-dashboard.css',
  // '../common_asset_page2/css/bootstrap.min.css',
  // '../common_asset_page2/demo/demo.css',

  // '../common_asset_page/css/material-dashboard.css.map',
]
})

export class ServiceCreateComponent {

  constructor(private router: Router
    // , private _authService: AuthService
    , private firebaseService : FirebaseService
    , private accountService : AccountService
    , private serviceService : ServiceService
    , private salonCategoryService : SalonCategoryService
    , private feedBackService : FeedBackService

    ) { }

  public salonOwner : Service = {
    id: 0,
    barbershop: '',
    description: '',
    image: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/246029528_4534048490010294_8839822965402441008_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=xCCEaTREZQMAX_u_KFd&_nc_ht=scontent.fsgn2-4.fna&oh=dea93e62d22b97a00cd281fdc0545976&oe=6197C698',
    isSelected: true,
    name: '',
    numberOfUsedPeople :0,
    offerPrice: 0,
    price:0,
    rating: 0,
    category:1
  };
  public category : Category[] = [];
  ngOnInit() {
    this.salonCategoryService.getDataCategoryPage().subscribe((data) => {
      this.category = data
      console.log(data);
    })
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
    this.router.navigate(['service-management']);
  }
  goUserPage(){
    this.router.navigate(['salon-profile']);
  }
}
