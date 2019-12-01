import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAdminComponent } from './seccion-admin.component';

describe('SeccionAdminComponent', () => {
  let component: SeccionAdminComponent;
  let fixture: ComponentFixture<SeccionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
