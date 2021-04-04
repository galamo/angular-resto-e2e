import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { BaseURL } from '..';

const ORDERS_PATH = "/orders"

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getOrders() {
    return this.httpClient.get(`${BaseURL}${ORDERS_PATH}`).toPromise()
  }

}
