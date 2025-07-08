import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { ProductsComponent } from "../Pages/products/products.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, ProductsComponent,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
