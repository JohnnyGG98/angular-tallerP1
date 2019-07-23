import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-des-empleado',
  templateUrl: './des-empleado.component.html',
  styleUrls: ['./des-empleado.component.css']
})
export class DesEmpleadoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
