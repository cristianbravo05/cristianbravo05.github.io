import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishClassComponent } from './english-class.component';

describe('EnglishClassComponent', () => {
  let component: EnglishClassComponent;
  let fixture: ComponentFixture<EnglishClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
