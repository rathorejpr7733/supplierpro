import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';


import { HeaderComponent } from '../../../../layout/header/header.component';

@Component({
  selector: 'app-salesaddress',
  standalone: true,
  templateUrl: './salesaddress.component.html',
  styleUrl: './salesaddress.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent
  ]
})
export class SalesaddressComponent {
activeStep = 1;

setStep(step: number): void {
  this.activeStep = step;
}


// for nextbtn for page 2
  constructor(private router: Router) {}

  goToSalesOrder(): void {
    this.router.navigate(['/salesorder']);
  }
  
}



