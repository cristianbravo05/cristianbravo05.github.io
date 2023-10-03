import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishTableVerbComponent } from './english-table-verb.component';

describe('EnglishTableVerbComponent', () => {
  let component: EnglishTableVerbComponent;
  let fixture: ComponentFixture<EnglishTableVerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishTableVerbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishTableVerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
