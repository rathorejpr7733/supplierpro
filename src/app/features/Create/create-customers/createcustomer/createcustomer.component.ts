import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';



// Header component
import { HeaderComponent } from '../../../../layout/header/header.component';

@Component({
  selector: 'app-createcustomer',
  standalone: true,
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.scss'],
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

  ]
})
export class CreatecustomerComponent {
  activeStep = 1;

  constructor(private router: Router) {}

  setStep(step: number): void {
    this.activeStep = step;
  }

  goToCustomerInfo(): void {
    this.router.navigate(['/customersaddress']);
  }
}
