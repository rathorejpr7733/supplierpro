import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleInvoicesrComponent } from './sale-invoicesr.component';

describe('SaleInvoicesrComponent', () => {
  let component: SaleInvoicesrComponent;
  let fixture: ComponentFixture<SaleInvoicesrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleInvoicesrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleInvoicesrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
