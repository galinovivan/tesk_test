import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order: Order;
  constructor() { }

  ngOnInit() {
  }

}
