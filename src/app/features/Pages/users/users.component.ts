import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { HeaderComponent } from '../../../layout/header/header.component';

export interface UserElement {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  role: string;
  action: string;
}

const USER_DATA: UserElement[] = [
  {
    id: 'U001',
    name: 'Devendra Rathore',
    email: 'rathoredevendra439@gmail.com',
    contactNumber: '7733010198',
    role: 'ADMIN',
    action: 'Edit'
  },
  {
    id: 'U002',
    name: 'Sneha Singh',
    email: 'sneha.singh@example.com',
    contactNumber: '9876543210',
    role: 'MANAGER',
    action: 'Edit'
  },
  {
    id: 'U003',
    name: 'Rahul Mehta',
    email: 'rahul.mehta@example.com',
    contactNumber: '9012345678',
    role: 'STAFF',
    action: 'Edit'
  }
];

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [
    HeaderComponent,
    CommonModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class UsersComponent {
  displayedColumns: string[] = [
    'select',
    'id',
    'name',
    'email',
    'contactNumber',
    'role',
    'action'
  ];

  dataSource = USER_DATA;
  selection = new SelectionModel<UserElement>(true, []);

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

  checkboxLabel(row?: UserElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }
}
