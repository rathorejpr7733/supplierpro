import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../layout/header/header.component";

@Component({
  selector: 'app-suppliergreetings',
  imports: [HeaderComponent],
  templateUrl: './suppliergreetings.component.html',
  styleUrl: './suppliergreetings.component.scss'
})
export class SuppliergreetingsComponent {
 activeStep = 6;



  setStep(step: number): void {
    this.activeStep = step;
  }
}
