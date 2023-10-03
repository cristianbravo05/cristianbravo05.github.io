import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellerCreatorComponent } from './seller-creator.component';

describe('SellerCreatorComponent', () => {
  let component: SellerCreatorComponent;
  let fixture: ComponentFixture<SellerCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
