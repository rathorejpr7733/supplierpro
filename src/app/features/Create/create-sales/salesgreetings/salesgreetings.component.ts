import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../layout/header/header.component";

@Component({
  selector: 'app-salesgreetings',
  imports: [HeaderComponent],
  templateUrl: './salesgreetings.component.html',
  styleUrl: './salesgreetings.component.scss'
})
export class SalesgreetingsComponent {
  activeStep = 3;



  setStep(step: number): void {
    this.activeStep = step;
  }
}
