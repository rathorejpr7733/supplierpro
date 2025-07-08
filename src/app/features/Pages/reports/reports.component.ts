import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { HeaderComponent } from '../../../layout/header/header.component';

export interface ReportElement {
  product: string;
  expiry: string;
  stockQty: number;
  soldQty: number;
  balQty: number;
  allocated: number;
  poNumber: string;
  poRef: string;
  action: string;
}

const REPORT_DATA: ReportElement[] = [
  {
    product: 'Wooden Chair',
    expiry: '2025-06-15',
    stockQty: 150,
    soldQty: 40,
    balQty: 110,
    allocated: 30,
    poNumber: 'PO-1001',
    poRef: 'REF-A12',
    action: 'Edit'
  },
  {
    product: 'LED Bulb',
    expiry: '2026-01-20',
    stockQty: 300,
    soldQty: 180,
    balQty: 120,
    allocated: 50,
    poNumber: 'PO-1002',
    poRef: 'REF-B34',
    action: 'Edit'
  },
  {
    product: 'Cement Bag',
    expiry: '2025-09-10',
    stockQty: 500,
    soldQty: 350,
    balQty: 150,
    allocated: 100,
    poNumber: 'PO-1003',
    poRef: 'REF-C56',
    action: 'Edit'
  }
];

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  imports: [
    HeaderComponent,
    CommonModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class ReportsComponent {
  displayedColumns: string[] = [
    'select',
    'product',
    'expiry',
    'stockQty',
    'soldQty',
    'balQty',
    'allocated',
    'poNumber',
    'poRef',
    'action'
  ];

  dataSource = REPORT_DATA;
  selection = new SelectionModel<ReportElement>(true, []);

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

  checkboxLabel(row?: ReportElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.product}`;
  }
}
