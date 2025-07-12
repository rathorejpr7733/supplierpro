import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../layout/header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';



export interface GroupsElement {
  group: number;
  description: string;
  brand: number;
  parent: string;
  action: string;
}
const ELEMENT_DATA: GroupsElement[] = [
  {
    group: 2001,
    description: '50 units',
    brand: 8800123456701,
    parent: 'Polished Teak Wood Blocks - 1ft x 1ft (Export)',
    action: 'Edit'
  },

  {
    group: 2003,
    description: '75 units',
    brand: 8800123456703,
    parent: 'Solar Panels - 250W (Export)',
    action: 'Edit'
  },

  {
    group: 2005,
    description: '120 units',
    brand: 8800123456705,
    parent: 'Electronic Thermostats - Smart Control',
    action: 'Edit'
  }
];

@Component({
  selector: 'app-groups',
  standalone:true,
  imports: [
    HeaderComponent,
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
displayedColumns: string[] = [
    'select',
    'group',
    'description',
    'brand',
    'parent',
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.group + 1}`;
  }

}
