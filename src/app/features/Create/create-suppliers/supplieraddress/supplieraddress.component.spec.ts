import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplieraddressComponent } from './supplieraddress.component';

describe('SupplieraddressComponent', () => {
  let component: SupplieraddressComponent;
  let fixture: ComponentFixture<SupplieraddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplieraddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplieraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
