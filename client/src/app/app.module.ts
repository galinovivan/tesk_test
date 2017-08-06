import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.route';

import { MdInputModule, } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';
import { MdDatepickerModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { OrderItemComponent } from './components/order-create/order-item/order-item.component';
import { OrderFormCreateComponent } from './components/order-create/order-form-create/order-form-create.component';
import { OrderListComponent } from './components/order-create/order-list/order-list.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OrderFormCreateComponent,
    OrderCreateComponent,
    OrderListComponent,
    OrderItemComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    routing,
    HttpModule,
    MdInputModule,
    MdSelectModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdRadioModule,
    MdCheckboxModule,
    MdButtonModule,
    MdSnackBarModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
