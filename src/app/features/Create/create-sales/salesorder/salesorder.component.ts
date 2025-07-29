import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from '../../../../layout/header/header.component';

@Component({
  selector: 'app-salesorder',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HeaderComponent
  ],
  templateUrl: './salesorder.component.html',
  styleUrls: ['./salesorder.component.scss']
})
export class SalesorderComponent {
  activeStep = 2;

  constructor(private router: Router) {}

  setStep(step: number): void {
    this.activeStep = step;
  }

  // Updated property: renamed 'name' to 'product' to match HTML template
  productList = [
    { product: '', size: 0, qty: 0, price: 0, cost: 0 }
  ];

  addItem(): void {
    this.productList.push({ product: '', size: 0, qty: 0, price: 0, cost: 0 });
  }

  removeItem(index: number): void {
    this.productList.splice(index, 1);
  }

  incrementQty(index: number): void {
    this.productList[index].qty++;
  }

  decrementQty(index: number): void {
    if (this.productList[index].qty > 0) {
      this.productList[index].qty--;
    }
  }

  calculateValue(item: any): number {
    return item.qty * item.price;
  }

  get totalNet(): number {
    return this.productList.reduce((total, item) => total + (item.qty * item.price), 0);
  }

  get totalVAT(): number {
    return this.totalNet * 0.15;
  }

  get totalValue(): number {
    return this.totalNet + this.totalVAT;
  }

  get profit(): number {
    return this.totalNet - this.productList.reduce((sum, item) => sum + item.cost, 0);
  }

  get totalKilos(): number {
    return this.productList.reduce((total, item) => total + item.size, 0);
  }

  goToSalesOrder(): void {
    this.router.navigate(['/salesgreetings']);
  }

  submitOrder(): void {
    this.router.navigate(['/salesgreetings']);
  }
}
