import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { BaseURL } from '..';

const ORDERS_PATH = "/orders"

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getOrders(from?: number, limit?: number) {
    const queryParams = from >= 0 && limit ? `?from=${from}&limit=${limit}` : "";
    return this.httpClient.get(`${BaseURL}${ORDERS_PATH}${queryParams}`).toPromise()
  }

}
