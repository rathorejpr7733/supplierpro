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



// Create Pages of every navbar elements  features/create/create-sales
import { SalesaddressComponent } from './features/Create/create-sales/salesaddress/salesaddress.component';
import { SalesorderComponent } from './features/Create/create-sales/salesorder/salesorder.component';
import { SalesgreetingsComponent } from './features/Create/create-sales/salesgreetings/salesgreetings.component';

// features/create/create-customers
import { CreatecustomerComponent } from './features/Create/create-customers/createcustomer/createcustomer.component';
import { CustomersaddressComponent } from './features/Create/create-customers/customersaddress/customersaddress.component';
import { CustomersgreetingsComponent } from './features/Create/create-customers/customersgreetings/customersgreetings.component';
import { CustomersinvoiceComponent } from './features/Create/create-customers/customersinvoice/customersinvoice.component';


      //  features/create/create-Suppliers
import { SupplierinfoComponent } from './features/Create/create-suppliers/supplierinfo/supplierinfo.component';
import { SupplieraddressComponent } from './features/Create/create-suppliers/supplieraddress/supplieraddress.component';
import { SupplierfinanceComponent } from './features/Create/create-suppliers/supplierfinance/supplierfinance.component';
import { SuppliermiscComponent } from './features/Create/create-suppliers/suppliermisc/suppliermisc.component';
import { SupplierpaymentComponent } from './features/Create/create-suppliers/supplierpayment/supplierpayment.component';
import { SuppliergreetingsComponent } from './features/Create/create-suppliers/suppliergreetings/suppliergreetings.component';

     //  features/create/create-Purchase
import { PurchaseorderComponent } from './features/Create/create-purchase/purchaseorder/purchaseorder.component';
import { PurchaseaddressComponent } from './features/Create/create-purchase/purchaseaddress/purchaseaddress.component';
import { PurchasegreetingsComponent } from './features/Create/create-purchase/purchasegreetings/purchasegreetings.component';

   //  features/create/create-Product
import { CreateproductComponent } from './features/Create/create-products/createproduct/createproduct.component';



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
    { path: 'credit-notes', component:CreditNotesComponent},
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



  // Create Pages of every navbar elements  features/create/create-sales
    {path:'salesaddress', component:SalesaddressComponent},
    {path:'salesorder', component:SalesorderComponent},
    { path: 'salesgreetings',component:SalesgreetingsComponent },

    //  features/create/create-customers
    { path: 'createcustomer',component:CreatecustomerComponent },
    {path: 'customersinvoice', component:CustomersinvoiceComponent},
     { path: 'customersaddress', component:CustomersaddressComponent },
     { path: 'customersgreetings', component:CustomersgreetingsComponent},

      //  features/create/create-Suppliers
      {path:'supplierinfo',component:SupplierinfoComponent},
      {path:'supplieraddress',component:SupplieraddressComponent},
      {path:'supplierfinance',component:SupplierfinanceComponent},
      {path:'suppliermisc',component:SuppliermiscComponent},
      {path:'supplierpayment',component:SupplierpaymentComponent},
      {path:'suppliergreetings',component:SuppliergreetingsComponent},

                //  features/create/create-Purchase
      {path:'purchaseaddress', component:PurchaseaddressComponent},
      { path: 'purchaseorder',component:PurchaseorderComponent},    
      { path: 'purchasegreetings', component:PurchasegreetingsComponent},

      
                //  features/create/create-Product
      { path: 'createproduct', component: CreateproductComponent },
      

    { path: '**', redirectTo:'login', pathMatch:'full' },

];
