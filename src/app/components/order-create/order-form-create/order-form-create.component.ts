import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-order-form-create',
  templateUrl: './order-form-create.component.html',
  styleUrls: ['./order-form-create.component.scss'],
  providers: [OrderService]
})
export class OrderFormCreateComponent {
  orderForm: FormGroup;
  createOrder: Order;
  isDone: boolean = false;
  constructor(private formBuilder: FormBuilder, private orderService: OrderService) {
    this.orderForm = this.formBuilder.group({
      'userName': ['', Validators.required],
      'itemColor': ['', Validators.required],
      'itemSize': ['', Validators.required],
      'date': [Date.now(), Validators.required],
      'subscrible': [true, Validators.requiredTrue]
    });
   }
   formSubmit(order) {
    this.orderService.create(order)
      .subscribe((data) => {
        this.createOrder = data;
        this.isDone = true;
      })
   }



}
