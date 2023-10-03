import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningGameComponent } from './listening-game.component';

describe('ListeningGameComponent', () => {
  let component: ListeningGameComponent;
  let fixture: ComponentFixture<ListeningGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeningGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeningGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
