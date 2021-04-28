import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showReportsParam: boolean = false;
  constructor() { }
  showReports() { this.showReportsParam = true }
  hideReports() { this.showReportsParam = false }
  ngOnInit(): void {
    // callServer
    // if i got 10 result
    this.showReportsParam = false
  }

}
