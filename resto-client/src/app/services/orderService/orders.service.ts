import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

const BASE_URL = "http://localhost:5000"
const ORDERS_PATH = "/orders"

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getOrders() {
    return this.httpClient.get(`${BASE_URL}${ORDERS_PATH}`).toPromise()
  }

}
