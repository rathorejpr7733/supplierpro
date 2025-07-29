import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseaddressComponent } from './purchaseaddress.component';

describe('PurchaseaddressComponent', () => {
  let component: PurchaseaddressComponent;
  let fixture: ComponentFixture<PurchaseaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseaddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
