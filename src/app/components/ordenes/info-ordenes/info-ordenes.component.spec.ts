import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOrdenesComponent } from './info-ordenes.component';

describe('InfoOrdenesComponent', () => {
  let component: InfoOrdenesComponent;
  let fixture: ComponentFixture<InfoOrdenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoOrdenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
