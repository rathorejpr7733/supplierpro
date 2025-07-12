import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../layout/header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';

export interface SalesLedgerElement {
  date: string;
  tp: string;
  reference: string;
  details: string;
  value: number;
  balance: number;
  cumbalance: number;
  action: string;
}

const ELEMENT_DATA: SalesLedgerElement[] = [
  {
    date: '2024-12-10',
    tp: 'TP001',
    reference: 'REF001',
    details: 'Sale to ABC Ltd',
    value: 1200,
    balance: 1200,
    cumbalance: 1200,
    action: 'Edit'
  },
  {
    date: '2024-12-12',
    tp: 'TP002',
    reference: 'REF002',
    details: 'Sale to XYZ Pvt',
    value: 1500,
    balance: 2700,
    cumbalance: 2700,
    action: 'Edit'
  },
  {
    date: '2024-12-14',
    tp: 'TP003',
    reference: 'REF003',
    details: 'Return from ABC Ltd',
    value: -300,
    balance: 2400,
    cumbalance: 2400,
    action: 'Edit'
  },
  {
    date: '2024-12-16',
    tp: 'TP004',
    reference: 'REF004',
    details: 'Purchase from LMN Inc',
    value: -1000,
    balance: 1400,
    cumbalance: 1400,
    action: 'Edit'
  },
  {
    date: '2024-12-18',
    tp: 'TP005',
    reference: 'REF005',
    details: 'Credit Note Issued',
    value: 500,
    balance: 1900,
    cumbalance: 1900,
    action: 'Edit'
  }
];

@Component({
  selector: 'app-sales-ledger',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    HeaderComponent
  ],
  templateUrl: './sales-ledger.component.html',
  styleUrl: './sales-ledger.component.scss'
})
export class SalesLedgerComponent {
  displayedColumns: string[] = [
    'select',
    'date',
    'tp',
    'reference',
    'details',
    'value',
    'balance',
    'cumbalance',
    'action'
  ];

  dataSource = ELEMENT_DATA;
  selection = new SelectionModel<SalesLedgerElement>(true, []);

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.dataSource);
    }
  }

  checkboxLabel(row?: SalesLedgerElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.reference}`;
  }
}
