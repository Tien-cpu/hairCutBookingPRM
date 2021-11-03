// import {Account} from '../models/Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { FeedBack } from '../Models/FeedBackModel'
// import { Store } from '../Models/Store'

@Injectable({
    providedIn: 'root'
})

export class FeedBackService {
    constructor(private http: HttpClient) {}
    getDataFeedBackPage(id: number) {
      const url = 'http://localhost:3000/api/v1/admin/feedbackService/'+id;
      let token = sessionStorage.getItem('token');
      console.log('token au: ', token);
  
      return this.http.get<FeedBack[]>(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      });
  }
}
