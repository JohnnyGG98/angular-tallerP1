import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesEmpleadoComponent } from './des-empleado.component';

describe('DesEmpleadoComponent', () => {
  let component: DesEmpleadoComponent;
  let fixture: ComponentFixture<DesEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
