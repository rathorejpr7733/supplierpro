import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasegreetingsComponent } from './purchasegreetings.component';

describe('PurchasegreetingsComponent', () => {
  let component: PurchasegreetingsComponent;
  let fixture: ComponentFixture<PurchasegreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasegreetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasegreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
