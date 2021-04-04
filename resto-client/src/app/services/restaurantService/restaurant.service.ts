import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseURL } from '..';



const restaurants_PATH = "/restaurants"


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  getRestaurants(): Promise<Array<any>> {
    return (this.httpClient.get(`${BaseURL}${restaurants_PATH}`).toPromise() as Promise<Array<any>>)
  }
}
