import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { MdSnackBar } from '@angular/material';

import { Order } from '../model/order.model';

@Component({
  selector: 'app-order-form-create',
  templateUrl: './order-form-create.component.html',
  styleUrls: ['./order-form-create.component.scss'],
  providers: [OrderService]
})
export class OrderFormCreateComponent {
  private id = 1;
  orderForm: FormGroup;
  createOrder: Order;
  isDone: boolean = false;
  constructor(private formBuilder: FormBuilder, private orderService: OrderService, private snackBar: MdSnackBar) {
    this.orderForm = this.formBuilder.group({
     // 'id': ['', Validators.required],
      'userName': ['', Validators.required],
      'itemColor': ['', Validators.required],
      'itemSize': ['', Validators.required],
      'date': [Date.now(), Validators.required],
      'subscrible': [true, Validators.requiredTrue]
    });
   }
   formSubmit() {
    // this.orderService.create(order)
    //   .subscribe((data) => {
    //     this.createOrder = data;
    //     this.isDone = true;
    //   })
    if (!this.orderForm.valid) {
      this.openSnackBar('form is invalid');
      return false;
    }

    let order: Order = this.orderForm.value;
    console.log(order.date);
    this.orderService.create(order)
      .subscribe((data) => {
        this.createOrder = data;
        this.isDone = true;
        this.openSnackBar('the is a successfull created');
      },
    (error) => {
        console.log(error);
    });
    console.log(this);
   }
   private openSnackBar(message: string) {
      this.snackBar.open(message, '', {
        duration: 2000
      })     
   }
}
