import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { HeaderComponent } from '../../../../layout/header/header.component';

@Component({
  selector: 'app-supplierfinance',
  imports: [
        CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  templateUrl: './supplierfinance.component.html',
  styleUrl: './supplierfinance.component.scss'
})
export class SupplierfinanceComponent {
activeStep = 3;

  constructor(private router: Router) {}

  setStep(step: number): void {
    this.activeStep = step;
  }

  goToNext(): void {
    this.router.navigate(['/suppliermisc']);
  }
}
