import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalonProfile } from '../Models/SalonOwnerModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SalonProfileService {
  constructor(private http: HttpClient) {}

  getDataUserPage() {
    const url = 'http://54.255.129.30:8100/api/v1/admin/users';
    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);

    return this.http.get<SalonProfile>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }
  postSalonUpdate(salon : SalonProfile) {
    const url = 'http://localhost:3000/api/v1/admin/salonowner';
    console.log(salon)
    let salonAPI : SalonProfile = salon;
    return this.http.post(url, salonAPI, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  GetSalonprofileByID(id : number) : Observable<SalonProfile>{
    let token = sessionStorage.getItem('token');

    const url ='http://localhost:3000/api/v1/admin/salonowner/'+token
    console.log('id service: '+id);

    return this.http.get<SalonProfile>(url, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
      })
    });
  }

  updateUser(user: {
    "id": number,
    "name": string,
    "address": string,
    "phone": string,
    "role_id": string,
    "role_name": string,
    "status": boolean,
    "email": string
  }): Observable<any> {
    const url = 'http://54.255.129.30:8100/api/v1/admin/users';
    let token = sessionStorage.getItem('token');

    return this.http.put(url,user,{
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
  });
  }

}
