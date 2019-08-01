import { Component, OnInit } from '@angular/core';

import { EmpleadosService, Empleado } from 'src/app/services/empleados.services';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  empleado: Empleado = {nombre: '', apellido: '', cedula: '', img: 'No tenemos imagen'};
  guardado = false;
  msg = '';

  constructor(private empleadoService: EmpleadosService) { }

  guardarEmpleado(): void {
    this.empleado.img = 'NO IMAGE';
    this.empleadoService.agregarEmpleado(this.empleado);
    this.guardado = true;
    this.msg = 'Guardamos correctamente a ' + this.empleado.nombre + ' ' + this.empleado.apellido;
    this.empleado = {nombre: '', apellido: '', cedula: '', img: 'No tenemos imagen'};
  }

  cerrarMensaje(): void {
    this.guardado = false;
  }

  ngOnInit() {
  }

}
