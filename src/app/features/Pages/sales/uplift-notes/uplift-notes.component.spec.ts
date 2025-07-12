import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftNotesComponent } from './uplift-notes.component';

describe('UpliftNotesComponent', () => {
  let component: UpliftNotesComponent;
  let fixture: ComponentFixture<UpliftNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpliftNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpliftNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
