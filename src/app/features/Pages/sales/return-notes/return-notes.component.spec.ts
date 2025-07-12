import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnNotesComponent } from './return-notes.component';

describe('ReturnNotesComponent', () => {
  let component: ReturnNotesComponent;
  let fixture: ComponentFixture<ReturnNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
