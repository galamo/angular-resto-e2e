import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FilterPipe } from 'src/app/pipes/filter.pipe';


import { OrdersService } from "../../services/orderService/orders.service"
const CLIENT_DATA_LIMIT = 3
interface IOrder {
  orderNumber: number,
  orderOwner: string,
  fromHour: string,
  toHour: string,
  day: string,
}

const listOfColumns = [{ label: "Order number", value: "orderNumber" },
{ label: "From Hour", value: "fromHour" },
{ label: "To Hour", value: "toHour" },
{ label: "Owner", value: "orderOwner" },
{ label: "Number of reservations", value: "reservations" },
{ label: "Reservation Day", value: "day" },
{ label: "Outside", value: "isOutside" }]

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: any;
  public filteredOrders: any
  public displayedColumns: Array<string>;
  public filterModel: string
  public listOfCoulmnsModel: Array<any>;
  public selectedValue: string;
  public from: number;
  public limit: number;
  constructor(private router: Router, private ordersService: OrdersService) {
    this.listOfCoulmnsModel = listOfColumns;
    this.displayedColumns = [...listOfColumns.map(item => item.value), "actions"]
    this.filterModel = ""
    this.selectedValue = listOfColumns[0].value
    this.limit = CLIENT_DATA_LIMIT;
    this.from = 0;
  }
  ngOnInit(): void {
    this.getOrders()
  }
  deleteOrder(a) {


    // call service ; pass order number ; service will send to the server deletion operation 
  }
  async getOrders() {
    this.orders = await this.ordersService.getOrders(this.from, this.limit);
    this.filteredOrders = this.orders;
  }
  goToOrder(orderNumber: number) {
    this.router.navigate([`/order-details/${orderNumber}`])
  }
  async prev() {
    if (this.from - this.limit < 0) return;
    this.from = this.from - this.limit
    this.getOrders()
  }
  async next() {
    if (this.orders.length < this.limit) return;
    this.from = this.from + this.limit
    this.getOrders()
  }

  filterOperation(inputValue: string) {
    const newPipe = new FilterPipe()
    this.filteredOrders = newPipe.transform(this.orders, inputValue, this.selectedValue)
  }
}
