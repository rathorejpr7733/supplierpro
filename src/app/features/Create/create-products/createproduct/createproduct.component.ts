import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from "../../../../layout/header/header.component";

@Component({
  selector: 'app-createproduct',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    HeaderComponent
],
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      title: [''],
      code: [''],
      barcode: [''],
      pack: [''],
      size: [''],
      group: [''],
      brand: [''],
      vatCode: [''],
      vat: ['Yes'],
      weight: [''],
      cube: [''],
      perPallet: [''],
      layer: [''],
      lastDeliveryDate: [new Date()],
      salesPrice: [''],
      lastSellDate: [new Date()],
      freeStock: [''],
      stock: [''],
      onSalesOrder: [''],
      allocated: [''],
      onPurchaseOrder: [''],
      costPrice: [''],
      onPerforma: [''],
      description: ['']
    });
  }

  onSubmit(): void {
    console.log(this.productForm.value);
  }

  onCancel(): void {
    this.productForm.reset();
  }
}
