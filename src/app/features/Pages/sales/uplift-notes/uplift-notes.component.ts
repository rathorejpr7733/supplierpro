import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../layout/header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';




export interface UpliftNotesElement  {
      id:string;
      customer:string;
      reference: number;
      creation:string
      created:string
      shipping:string
      action:string;

}const ELEMENT_DATA: UpliftNotesElement[] = [
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
 

   {
    id: 'SO-004',
    customer: 'Infinix Solutions',
    reference: 123456792,
    creation: '08-Dec-2024',
    created: 'Dessi',
    shipping: '16-Dec-2024',
    action: 'Edit'
  },
 

     {
    id: 'SO-005',
    customer: 'In Time Tech',
    reference: 123456793,
    creation: '18-Dec-2024',
    created: 'Alex',
    shipping: '24-Dec-2024',
    action: 'Edit'
  },
 


];

@Component({
  selector: 'app-uplift-notes',
  imports: [ 
    HeaderComponent,
     HeaderComponent,
     MatTableModule,
    MatCheckboxModule,],
  templateUrl: './uplift-notes.component.html',
  styleUrl: './uplift-notes.component.scss'
})




export class UpliftNotesComponent {

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
   selection = new SelectionModel<UpliftNotesElement>(true, []);

  
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
  
checkboxLabel(row?: UpliftNotesElement): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
}
}
