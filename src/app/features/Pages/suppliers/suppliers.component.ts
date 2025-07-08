import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { HeaderComponent } from '../../../layout/header/header.component';

export interface SuppliersElement {
  id: string;
  company: string;
  address: string;
  postcode: string;
  country: string;
  delivery: string;
  contact: string;
  mobile: string;
  email: string;
  action: string;
}

const SUPPLIER_DATA: SuppliersElement[] = [
  {
    id: 'S-001',
    company: 'ABC Inc.',
    address: '123 M.St, AT',
    postcode: '12345',
    country: 'USA',
    delivery: 'New York',
    contact: 'John Doe',
    mobile: '123-456-7890',
    email: 'john.doe@example.com',
    action: 'Edit'
  },
  {
    id: 'S-002',
    company: 'Tech Solutions',
    address: '456 Park Ave,',
    postcode: '56789',
    country: 'India',
    delivery: 'Mumbai',
    contact: 'Amit Kumar',
    mobile: '9876543210',
    email: 'amit@techsolutions.in',
    action: 'Edit'
  },
  {
    id: 'S-003',
    company: 'Global Supplies Ltd.',
    address: '78 High St,bham',
    postcode: '54321',
    country: 'UK',
    delivery: 'London',
    contact: 'Emma Watson',
    mobile: '020-7946-0958',
    email: 'emma@globalsupplies.co.uk',
    action: 'Edit'
  }
];

@Component({
  selector: 'app-suppliers',
  standalone: true,
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  imports: [
    HeaderComponent,
    CommonModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class SuppliersComponent {
  displayedColumns: string[] = [
    'select',
    'id',
    'company',
    'address',
    'postcode',
    'country',
    'delivery',
    'contact',
    'mobile',
    'email',
    'action'
  ];

  dataSource = SUPPLIER_DATA;
  selection = new SelectionModel<SuppliersElement>(true, []);

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

  checkboxLabel(row?: SuppliersElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }
}
