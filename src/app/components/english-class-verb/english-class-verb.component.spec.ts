import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishClassVerbComponent } from './english-class-verb.component';

describe('EnglishClassVerbComponent', () => {
  let component: EnglishClassVerbComponent;
  let fixture: ComponentFixture<EnglishClassVerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishClassVerbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishClassVerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
