import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';


import { HeaderComponent } from '../../../../layout/header/header.component';

@Component({
  selector: 'app-purchaseaddress',
  standalone: true,
  imports: [  
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent],
  templateUrl: './purchaseaddress.component.html',
  styleUrl: './purchaseaddress.component.scss'
})
export class PurchaseaddressComponent {
activeStep = 1;

setStep(step: number): void {
  this.activeStep = step;
}


// for nextbtn for page 2
  constructor(private router: Router) {}

  goToPurchaseOrder(): void {
    this.router.navigate(['/purchaseorder']);
  }

}
