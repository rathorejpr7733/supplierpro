import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesNotesComponent } from './sales-notes.component';

describe('SalesNotesComponent', () => {
  let component: SalesNotesComponent;
  let fixture: ComponentFixture<SalesNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
