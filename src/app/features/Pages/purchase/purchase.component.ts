import { Component } from '@angular/core';
import { HeaderComponent } from "../../../layout/header/header.component";
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';


export interface PurchaseElement  {
      id:string;
      supplier:string;
      reference: string;
      expected:string;
      creation:string;
      created:string;
      status:string;
      action:string;
}

const ELEMENT_DATA: PurchaseElement[] = [
 {
    id: 'SO-001',
    supplier: 'Delta Exports Pvt Ltd',
    reference: 'P01234',
    expected: '2024-03-15',
    creation: '2024-03-12',
    created: 'Maharaj',
    status: 'Pending',
    action: 'Edit'
  },
  {
    id: 'SO-002',
    supplier: 'Skyline Trading Co.',
    reference: 'P04567',
    expected: '2024-02-28',
    creation: '2024-02-25',
    created: 'Anjali',
    status: 'Success',
    action: 'Edit'
  },
  {
    id: 'SO-003',
    supplier: 'Evergreen International',
    reference: 'P07890',
    expected: '2024-04-02',
    creation: '2024-03-30',
    created: 'Dev',
    status: 'Pending',
    action: 'Edit'
  }
];



@Component({
  selector: 'app-purchase',
  standalone:true,
  imports: [HeaderComponent,CommonModule, MatTableModule,MatCheckboxModule,],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {

  displayedColumns: string[] = [
  'id',
  'supplier',
  'reference',
  'expected',
  'creation',
  'created',
  'status',
  'action'
    ];
  
    dataSource = ELEMENT_DATA;
   selection = new SelectionModel<PurchaseElement>(true, []);

  
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
  
checkboxLabel(row?: PurchaseElement): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
}

  

}
