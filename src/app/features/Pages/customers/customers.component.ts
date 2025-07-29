import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { HeaderComponent } from '../../../layout/header/header.component';
import { Router } from '@angular/router';

export interface CustomerElement {
  id: string;
  company: string;
  mobile: string;
  email: string;
  country: string;
  delivery: string;
  contact: string;
  action: string;
}

const CUSTOMER_DATA: CustomerElement[] = [
  {
    id: 'ID-001',
    company: 'ABC Inc.',
    mobile: '8000632162',
    email: 'abc@gmail.com',
    country: 'India',
    delivery: 'Rajasthan',
    contact: 'Devendra',
    action: 'Edit'
  },
  {
    id: 'ID-002',
    company: 'XYZ Corp.',
    mobile: '9876543210',
    email: 'xyz@outlook.com',
    country: 'USA',
    delivery: 'California',
    contact: 'John',
    action: 'Edit'
  },
  {
    id: 'ID-003',
    company: 'Global Traders',
    mobile: '9001122334',
    email: 'global@traders.com',
    country: 'UK',
    delivery: 'London',
    contact: 'Emma',
    action: 'Edit'
  }
];

@Component({
  selector: 'app-customers',
  standalone: true,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  imports: [
    HeaderComponent,
    CommonModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class CustomersComponent {
  displayedColumns: string[] = [
    'select',
    'id',
    'company',
    'mobile',
    'email',
    'country',
    'delivery',
    'contact',
    'action'
  ];

    constructor(private router: Router) {}

        navigateToCreatecustomer() {
    this.router.navigate(['/createcustomer']);
  }



  dataSource = CUSTOMER_DATA;
  selection = new SelectionModel<CustomerElement>(true, []);

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

  checkboxLabel(row?: CustomerElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }
}
