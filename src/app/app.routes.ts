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

   // Sales sub folders routing imports ( dropdown components of Sales )
import { CreditNotesComponent } from './features/Pages/sales/credit-notes/credit-notes.component';
import { ProformaComponent } from './features/Pages/sales/proforma/proforma.component';
import { ReturnNotesComponent } from './features/Pages/sales/return-notes/return-notes.component';
import { SaleInvoicesrComponent } from './features/Pages/sales/sale-invoicesr/sale-invoicesr.component';
import { SalesNotesComponent } from './features/Pages/sales/sales-notes/sales-notes.component';
import { UpliftNotesComponent } from './features/Pages/sales/uplift-notes/uplift-notes.component';

      // Products sub folders routing ( dropdown components of Products )
import { GoodsInComponent } from './features/Pages/products/goods-in/goods-in.component';
import { GroupsComponent } from './features/Pages/products/groups/groups.component';
import { StockComponent } from './features/Pages/products/stock/stock.component';

  // Purchase sub folders routing ( dropdown components of Purchase )
import { SalesLedgerComponent } from './features/Pages/reports/sales-ledger/sales-ledger.component';


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


    // Sales sub folders routing ( dropdown components of Sales )
    { path: 'credit-notes',component:CreditNotesComponent },
    { path: 'proforma', component:ProformaComponent },
    { path: 'return-notes', component:ReturnNotesComponent },
    { path: 'sale-invoicesr', component:SaleInvoicesrComponent },
    { path: 'sales-notes', component:SalesNotesComponent },
    { path: 'uplift-notes', component:UpliftNotesComponent },

      // Products sub folders routing ( dropdown components of Products )
    { path: 'goods-in',component:GoodsInComponent },
    { path: 'groups', component:GroupsComponent },
    { path: 'stock', component:StockComponent },
    
      // Purchase sub folders routing ( dropdown components of Purchase )
    { path: 'sales-ledger',component:SalesLedgerComponent },


    { path: '**', redirectTo:'login', pathMatch:'full' },

];
