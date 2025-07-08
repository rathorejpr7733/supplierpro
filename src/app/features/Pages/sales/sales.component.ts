import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';

export interface SalesElement  {
      id:string;
      customer:string;
      reference: number;
      creation:string
      created:string
      shipping:string
      action:string;
}const ELEMENT_DATA: SalesElement[] = [
  {
    id: 'SO-001',
    customer: 'BlueOcean Exports',
    reference: 123456789,
    creation: '10-Nov-2024',
    created: 'Dev',
    shipping: '12-Nov-2024',
    action: 'Edit'
  },
  {
    id: 'SO-002',
    customer: 'Global Timber Co.',
    reference: 123456790,
    creation: '22-Nov-2024',
    created: 'Prateek',
    shipping: '25-Nov-2024',
    action: 'Edit'
  },
  {
    id: 'SO-003',
    customer: 'SolarEdge Solutions',
    reference: 123456791,
    creation: '08-Dec-2024',
    created: 'Sana',
    shipping: '11-Dec-2024',
    action: 'Edit'
  },
 

];


 @Component({
  selector: 'app-sales',
  standalone:true,
  imports: [HeaderComponent,
     MatTableModule,
    MatCheckboxModule,],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})


export class SalesComponent {


    displayedColumns: string[] = [
      'id',
      'customer',
      'reference',
      'creation',
      'created',
      'shipping',
      'action'
    ];
  
    dataSource = ELEMENT_DATA;
   selection = new SelectionModel<SalesElement>(true, []);

  
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
  
checkboxLabel(row?: SalesElement): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
}

  

}
