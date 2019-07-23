import { Component, OnInit } from '@angular/core';
import { EmpleadosService, Empleado } from 'src/app/services/empleados.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: any = [];
  empleado: Empleado;

  constructor(private empleadoService: EmpleadosService, private ruter: Router) {
    this.empleados = empleadoService.getEmpleados();
    console.log(this.empleados);
  }

  getEmpleado(id: number) {
    this.empleado = this.empleadoService.getEmpleado(id);
    console.log(this.empleado);
  }

  ngOnInit() {
  }

}
