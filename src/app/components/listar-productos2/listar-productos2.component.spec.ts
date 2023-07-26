import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductosComponent2 } from './listar-productos2.component';

describe('ListarProductosComponent2', () => {
  let component: ListarProductosComponent2;
  let fixture: ComponentFixture<ListarProductosComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProductosComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductosComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
