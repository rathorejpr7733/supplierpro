import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliergreetingsComponent } from './suppliergreetings.component';

describe('SuppliergreetingsComponent', () => {
  let component: SuppliergreetingsComponent;
  let fixture: ComponentFixture<SuppliergreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliergreetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliergreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
