import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../layout/header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';


export interface GroupsElement {
  type: string;
  Adjustmentdate: string;
  Adjustmentbuy: string;
  product: string;
  action: string;
}
const ELEMENT_DATA: GroupsElement[] =[
  {
    type: 'In Stock',
    Adjustmentdate: '10-12-2024',
    Adjustmentbuy: 'Adjustment Buy 1',
    product: 'Wood Blocks',
    action: 'Edit'
  },
  {
    type: 'Out of Stock',
    Adjustmentdate: '12-12-2024',
    Adjustmentbuy: 'Adjustment Buy 2',
    product: 'Steel Rods',
    action: 'Edit'
  },
  {
    type: 'In Stock',
    Adjustmentdate: '15-12-2024',
    Adjustmentbuy: 'Adjustment Buy 3',
    product: 'Cement Bags',
    action: 'Edit'
  },
  {
    type: 'Low Stock',
    Adjustmentdate: '18-12-2024',
    Adjustmentbuy: 'Adjustment Buy 4',
    product: 'Glass Sheets',
    action: 'Edit'
  },
  {
    type: 'In Stock',
    Adjustmentdate: '20-12-2024',
    Adjustmentbuy: 'Adjustment Buy 5',
    product: 'PVC Pipes',
    action: 'Edit'
  }
];


@Component({
  selector: 'app-stock',
  standalone:true,
  imports: [
     HeaderComponent,
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {
displayedColumns: string[] = [
    'select',
    'type',
    'Adjustmentdate',
    'Adjustmentbuy',
    'product',
    'action'
  ];

  dataSource = ELEMENT_DATA;
  selection = new SelectionModel<GroupsElement>(true, []);

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

  checkboxLabel(row?: GroupsElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.type + 1}`;
  }

}


