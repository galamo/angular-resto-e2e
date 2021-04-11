import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurantService/restaurant.service';
import { getRestaurantsLS, setRestaurantsLS } from "./rest.localStorage"

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  public displayedColumns: Array<string>;
  public restaurants: Array<any>;
  public isLoading: boolean;
  constructor(private restaurantsService: RestaurantService) {
    this.restaurants = getRestaurantsLS() || null;
    this.isLoading = true;
    this.displayedColumns = ["restaurantName", "country", "flag"]
  }

  async ngOnInit(): Promise<any> {
    this.restaurants = await this.restaurantsService.getRestaurants()
    setRestaurantsLS(this.restaurants);
    this.isLoading = false
  }

}
