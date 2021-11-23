import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/CategoryModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SalonCategoryService {
  constructor(private http: HttpClient) {}

  getDataCategoryPage() {
    const url = 'http://3.19.62.41:8190/api/v1/admin/category';
    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);
    return this.http.get<Category[]>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }
}
