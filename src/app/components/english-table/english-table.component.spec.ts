import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishTableComponent } from './english-table.component';

describe('EnglishTableComponent', () => {
  let component: EnglishTableComponent;
  let fixture: ComponentFixture<EnglishTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
