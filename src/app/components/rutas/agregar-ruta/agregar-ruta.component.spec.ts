import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRutaComponent } from './agregar-ruta.component';

describe('AgregarRutaComponent', () => {
  let component: AgregarRutaComponent;
  let fixture: ComponentFixture<AgregarRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
