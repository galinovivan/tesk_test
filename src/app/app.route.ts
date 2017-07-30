import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCreateComponent } from './components/order-create/order-create.component';


 const routes: Routes = [
    {
        path: '',
        component: OrderCreateComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);