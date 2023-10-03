import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishListConnectorsComponent } from './english-list-connectors.component';

describe('EnglishListConnectorsComponent', () => {
  let component: EnglishListConnectorsComponent;
  let fixture: ComponentFixture<EnglishListConnectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishListConnectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishListConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
