import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersgreetingsComponent } from './customersgreetings.component';

describe('CustomersgreetingsComponent', () => {
  let component: CustomersgreetingsComponent;
  let fixture: ComponentFixture<CustomersgreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersgreetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersgreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
