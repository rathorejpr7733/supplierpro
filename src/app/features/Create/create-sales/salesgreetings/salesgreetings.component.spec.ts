import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesgreetingsComponent } from './salesgreetings.component';

describe('SalesgreetingsComponent', () => {
  let component: SalesgreetingsComponent;
  let fixture: ComponentFixture<SalesgreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesgreetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesgreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
