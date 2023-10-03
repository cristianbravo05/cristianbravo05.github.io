import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishListAdjectiveComponent } from './english-list-adjective.component';

describe('EnglishListAdjectiveComponent', () => {
  let component: EnglishListAdjectiveComponent;
  let fixture: ComponentFixture<EnglishListAdjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishListAdjectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishListAdjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
