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

  GetSalonprofileByID(id : number) : Observable<SalonProfile>{
    const url ='http://localhost:3000/api/v1/admin/salonowner/'+id
    console.log('id service: '+id);

    // let token = sessionStorage.getItem('token');
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

  getPagingUserPage(page : string) : Observable<SalonProfile>{
    let token = sessionStorage.getItem('token');
    return this.http.get<SalonProfile>(page, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })
  }

}
