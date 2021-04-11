import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FilterPipe } from 'src/app/pipes/filter.pipe';


import { OrdersService } from "../../services/orderService/orders.service"

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
  constructor(private router: Router, private ordersService: OrdersService) {
    this.listOfCoulmnsModel = listOfColumns;
    this.displayedColumns = [...listOfColumns.map(item => item.value), "actions"]
    this.filterModel = ""
    this.selectedValue = listOfColumns[0].value

  }
  ngOnInit(): void {
    this.getOrders()
  }
  deleteOrder(a) {


    // call service ; pass order number ; service will send to the server deletion operation 
  }
  async getOrders() {
    this.orders = await this.ordersService.getOrders();
    this.filteredOrders = this.orders;
  }
  goToOrder(orderNumber: number) {
    this.router.navigate([`/order-details/${orderNumber}`])
  }

  filterOperation(inputValue: string) {
    const newPipe = new FilterPipe()
    this.filteredOrders = newPipe.transform(this.orders, inputValue, this.selectedValue)
  }
}
