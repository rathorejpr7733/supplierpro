import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersaddressComponent } from './customersaddress.component';

describe('CustomersaddressComponent', () => {
  let component: CustomersaddressComponent;
  let fixture: ComponentFixture<CustomersaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersaddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
