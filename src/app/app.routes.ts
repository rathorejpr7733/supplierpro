import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PurchaseComponent } from './features/Pages/purchase/purchase.component';
import { ProductsComponent } from './features/Pages/products/products.component';
import { SalesComponent } from './features/Pages/sales/sales.component';
import { CustomersComponent } from './features/Pages/customers/customers.component';
import { SuppliersComponent } from './features/Pages/suppliers/suppliers.component';
import { ReportsComponent } from './features/Pages/reports/reports.component';
import { UsersComponent } from './features/Pages/users/users.component';

export const routes: Routes = [
    { path:'',component:LoginComponent },
    { path:'login', component:LoginComponent},
    { path: 'dashboard', component:DashboardComponent },
    { path: 'purchase', component:PurchaseComponent },
    { path: 'products', component:ProductsComponent },
    { path:'sales', component:SalesComponent },
    { path: 'customers', component:CustomersComponent },
    { path: 'suppliers', component:SuppliersComponent },
    { path: 'reports',component:ReportsComponent },
    { path: 'users',component:UsersComponent },

    { path: '**', redirectTo:'Login' },
];
