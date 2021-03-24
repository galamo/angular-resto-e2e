import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { OrdersService } from "../../services/orderService/orders.service"

interface IOrder {
  orderNumber: number,
  orderOwner: string,
  fromHour: string,
  toHour: string,
  day: string,
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: any;
  public displayedColumns: Array<string>;
  constructor(private router: Router, private ordersService: OrdersService) {
    this.displayedColumns = ["orderNumber", "fromHour", "toHour", "orderOwner", "reservations", "day", "actions"]

  }
  ngOnInit(): void {
    this.getOrders()
  }
  deleteOrder(a) {
    // call service ; pass order number ; service will send to the server deletion operation 
  }
  async getOrders() {
    this.orders = await this.ordersService.getOrders();
  }
  goToOrder(orderNumber: number) {
    this.router.navigate([`/order-details/${orderNumber}`])
  }
}
