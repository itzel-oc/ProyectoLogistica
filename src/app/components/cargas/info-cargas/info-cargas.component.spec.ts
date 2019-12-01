import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCargasComponent } from './info-cargas.component';

describe('InfoCargasComponent', () => {
  let component: InfoCargasComponent;
  let fixture: ComponentFixture<InfoCargasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCargasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
