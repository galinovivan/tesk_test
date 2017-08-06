import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCreateComponent } from './components/order-create/order-create.component';
import { OrderListComponent } from './components/order-create/order-list/order-list.component';


 const routes: Routes = [
    {
        path: '',
        component: OrderCreateComponent
    },
    {
        path: 'orders',
        component: OrderListComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);