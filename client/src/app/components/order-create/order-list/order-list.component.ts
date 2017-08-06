import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  providers: [OrderService]
})
export class OrderListComponent implements OnInit {
  orderList: Order[] = [];
  error: any;
  constructor(private orderService: OrderService) {};
  ngOnInit() {
    this.orderService.getAll()
    .subscribe((data) => {
      this.orderList = data;
    },
    (error) => {
      this.error = error;
      console.log(error);
    })
  }
}
