import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmpleadosService, Empleado } from 'src/app/services/empleados.services';

@Component({
  selector: 'app-des-empleado',
  templateUrl: './des-empleado.component.html',
  styleUrls: ['./des-empleado.component.css']
})
export class DesEmpleadoComponent implements OnInit {

  idEmpleado: number;
  empleado: Empleado;

  constructor(private empleadoService: EmpleadosService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.idEmpleado = params.id;
    });
    this.getEmpleado(this.idEmpleado);
  }

  getEmpleado(id: number) {
    this.empleado = this.empleadoService.getEmpleado(id);
    console.log(this.empleado);
  }

  ngOnInit() {
  }

}
