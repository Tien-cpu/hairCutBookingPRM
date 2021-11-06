// import {Account} from '../models/Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { Service } from '../Models/Service'
import { adminservicepage } from '../Models/AdminSalonOwnerPageModel'
// import { Store } from '../Models/Store'

@Injectable({
    providedIn: 'root'
})

export class ServiceService {
    constructor(private http: HttpClient) {}
    getDataAservicePage(id: number) {
      const url = 'http://localhost:3000/service/getserviceadmindetail/'+id;
      let token = sessionStorage.getItem('token');
      console.log('token au: ', token);
  
      return this.http.get<Service>(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      });
  }
    getDataUserPage() {
        let token = sessionStorage.getItem('token');
        console.log('token au: ', token);
        const url = 'http://localhost:3000/service/getserviceadmin/'+token;
        return this.http.get<adminservicepage>(url, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        });
    }
    postUpdateService(service: Service) {
      let token = sessionStorage.getItem('token');
        const url = 'http://localhost:3000/service/getserviceadmin/'+token;
        console.log('token au: ', token);
    
        return this.http.post(url, service, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        });
    }
}
