import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierfinanceComponent } from './supplierfinance.component';

describe('SupplierfinanceComponent', () => {
  let component: SupplierfinanceComponent;
  let fixture: ComponentFixture<SupplierfinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierfinanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
