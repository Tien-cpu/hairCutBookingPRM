import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appoinment } from '../Models/AppoinmentModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SalonAppoinmentService {
  constructor(private http: HttpClient) {}

  getDataDasboardPage() {
    let token = sessionStorage.getItem('token');
    const url = 'http://localhost:3000/api/v1/admin/appointment/'+token;
    return this.http.get<Appoinment[]>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }
  postCancelDasboardPage(apoinment : Appoinment) {
    const url = 'http://localhost:3000/api/v1/admin/appointment';
    let token = sessionStorage.getItem('token');
    return this.http.post(url, apoinment,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }
}
