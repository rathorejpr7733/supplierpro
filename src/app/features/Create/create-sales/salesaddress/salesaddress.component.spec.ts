import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesaddressComponent } from './salesaddress.component';


describe('SalesaddressComponent', () => {
  let component: SalesaddressComponent;
  let fixture: ComponentFixture<SalesaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesaddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
