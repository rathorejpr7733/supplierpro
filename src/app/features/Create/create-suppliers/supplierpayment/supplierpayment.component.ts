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
  selector: 'app-supplierpayment',
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
  templateUrl: './supplierpayment.component.html',
  styleUrl: './supplierpayment.component.scss'
})
export class SupplierpaymentComponent {
activeStep = 5;

  constructor(private router: Router) {}

  setStep(step: number): void {
    this.activeStep = step;
  }

  Submit(): void {
    this.router.navigate(['/suppliergreetings']);
  }

}
