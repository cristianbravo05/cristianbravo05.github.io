import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishListVerbComponent } from './english-list-verb.component';

describe('EnglishListVerbComponent', () => {
  let component: EnglishListVerbComponent;
  let fixture: ComponentFixture<EnglishListVerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishListVerbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishListVerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
