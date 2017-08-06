import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Order } from '../model/order.model';


@Injectable()

export class OrderService {
  private apiUrl = 'http://localhost:61988/api/Orders';
  constructor(private http: Http) {};
  getAll(): Observable<Order[]> {
    return this.http.get(this.apiUrl)
    .map((response: Response) => {
      const data = response.json();
      let orders: Order[] = [];
      for (let i in data) {
        orders.push(data[i]);
      }
      return orders;
    })
    .catch((error: any) => {
      return Observable.throw(error);
    })
  };
  create(order: Order): Observable<any> {
    const body = JSON.stringify(order);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    return this.http.post(this.apiUrl, body, { headers: headers })
      .map((response: Response) => {
      return response.json();
      })
      .catch((error: any) => {
      return Observable.throw(error);
      })
  };
}
