import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../layout/header/header.component";


@Component({
  selector: 'app-customersgreetings',
  imports: [HeaderComponent],
  templateUrl: './customersgreetings.component.html',
  styleUrl: './customersgreetings.component.scss'
})
export class CustomersgreetingsComponent {
  activeStep = 4;



  setStep(step: number): void {
    this.activeStep = step;
  }
}
