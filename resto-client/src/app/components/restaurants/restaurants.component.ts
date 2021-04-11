import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurantService/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  public displayedColumns: Array<string>;
  public restaurants: Array<any>;
  constructor(private restaurantsService: RestaurantService) {
    this.restaurants = null;
    // this.isLoading = this.restaurants.length;
    this.displayedColumns = ["restaurantName", "country", "flag"]
  }

  async ngOnInit(): Promise<any> {
    this.restaurants = await this.restaurantsService.getRestaurants()
  }



}
