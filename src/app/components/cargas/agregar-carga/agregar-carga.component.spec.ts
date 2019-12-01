import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCargaComponent } from './agregar-carga.component';

describe('AgregarCargaComponent', () => {
  let component: AgregarCargaComponent;
  let fixture: ComponentFixture<AgregarCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
