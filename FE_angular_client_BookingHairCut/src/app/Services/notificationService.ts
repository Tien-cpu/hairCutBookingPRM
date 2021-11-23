import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { notification } from '../Models/notificationModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class notificationService {
  constructor(private http: HttpClient) {}

  getDatanotificationPage() {
    let token = sessionStorage.getItem('token');
    const url = 'http://3.19.62.41:8190/api/v1/admin/getnotifications/'+token;
    return this.http.get<notification[]>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }
}
