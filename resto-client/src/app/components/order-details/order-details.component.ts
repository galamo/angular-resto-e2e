import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  public subscriber: any;
  public orderNumber: number
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe(params => {
      this.orderNumber = params["orderNumber"]
      console.log(this.orderNumber)
    })
  }

  goToOrder() {
    this.router.navigate([`/order-details/${123451}`])
  }

  ngOnDestroy() {
    console.log("UnSubscribe")
    this.subscriber.unsubscribe()
  }

}
