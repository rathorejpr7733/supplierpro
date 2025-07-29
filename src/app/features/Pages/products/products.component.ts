import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { HeaderComponent } from "../../../layout/header/header.component";
import { Router } from '@angular/router';




export interface ProductElement {
  code: number;
  size: string;
  barcode: number;
  description: string;
  lastDelivery: string;
  lastSell: string;
  action: string;
}
const ELEMENT_DATA: ProductElement[] = [
  {
    code: 2001,
    size: '50 units',
    barcode: 8800123456701,
    description: 'Polished Teak Wood Blocks - 1ft x 1ft (Export)',
    lastDelivery: '2024-11-10',
    lastSell: '2024-11-14',
    action: 'Edit'
  },

  {
    code: 2003,
    size: '75 units',
    barcode: 8800123456703,
    description: 'Solar Panels - 250W (Export)',
    lastDelivery: '2024-12-05',
    lastSell: '2024-12-10',
    action: 'Edit'
  },

  {
    code: 2005,
    size: '120 units',
    barcode: 8800123456705,
    description: 'Electronic Thermostats - Smart Control',
    lastDelivery: '2025-01-05',
    lastSell: '2025-01-09',
    action: 'Edit'
  }
];


@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    HeaderComponent
]
})
export class ProductsComponent {
  displayedColumns: string[] = [
    'select',
    'code',
    'size',
    'barcode',
    'description',
    'lastDelivery',
    'lastSell',
    'action'
  ];

      constructor(private router: Router) {}

       navigateToCreateproduct() {
    this.router.navigate(['/createproduct']);
  }


  dataSource = ELEMENT_DATA;
  selection = new SelectionModel<ProductElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource);
  }

  checkboxLabel(row?: ProductElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.code + 1}`;
  }
}
