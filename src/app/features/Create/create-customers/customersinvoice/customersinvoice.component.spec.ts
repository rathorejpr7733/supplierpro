import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersinvoiceComponent } from './customersinvoice.component';

describe('CustomersinvoiceComponent', () => {
  let component: CustomersinvoiceComponent;
  let fixture: ComponentFixture<CustomersinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersinvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
