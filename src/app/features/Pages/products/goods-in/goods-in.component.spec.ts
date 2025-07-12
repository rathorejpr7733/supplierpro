import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsInComponent } from './goods-in.component';

describe('GoodsInComponent', () => {
  let component: GoodsInComponent;
  let fixture: ComponentFixture<GoodsInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
