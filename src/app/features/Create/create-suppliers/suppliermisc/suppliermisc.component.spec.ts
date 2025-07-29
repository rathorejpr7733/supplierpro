import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliermiscComponent } from './suppliermisc.component';

describe('SuppliermiscComponent', () => {
  let component: SuppliermiscComponent;
  let fixture: ComponentFixture<SuppliermiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliermiscComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliermiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
