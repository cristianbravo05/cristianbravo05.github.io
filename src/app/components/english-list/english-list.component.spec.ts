import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishListComponent } from './english-list.component';

describe('EnglishListComponent', () => {
  let component: EnglishListComponent;
  let fixture: ComponentFixture<EnglishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
