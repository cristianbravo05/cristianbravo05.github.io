import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishListItemComponent } from './english-list-item.component';

describe('EnglishListItemComponent', () => {
  let component: EnglishListItemComponent;
  let fixture: ComponentFixture<EnglishListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
