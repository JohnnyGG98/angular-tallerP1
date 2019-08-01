import { Injectable } from '@angular/core';

@Injectable()
export class EmpleadosService {

    private empleados: Empleado[] = [
        {
            nombre: 'Luis',
            apellido: 'Perez',
            cedula: '0101',
            img: 'assets/imgs/man.png'
        },
        {
            nombre: 'Juan',
            apellido: 'Perez',
            cedula: '0102',
            img: 'assets/imgs/man.png'
        },
        {
            nombre: 'Roberto',
            apellido: 'Lopez',
            cedula: '0103',
            img: 'assets/imgs/man.png'
        },
        {
            nombre: 'Rigoberto',
            apellido: 'Medina',
            cedula: '0104',
            img: 'assets/imgs/man.png'
        },
        {
            nombre: 'Pedro',
            apellido: 'Valdez',
            cedula: '0105',
            img: 'assets/imgs/man.png'
        },
        {
            nombre: 'Raúl',
            apellido: 'Valverde',
            cedula: '0106',
            img: 'assets/imgs/man.png'
        },
        {
            nombre: 'Edwin',
            apellido: 'Sinchi',
            cedula: '0107',
            img: 'assets/imgs/man.png'
        }
    ];

    constructor() {
        console.log('Servicio listo para ser utilizado...');
    }

    getEmpleados(): Empleado[] {
        return this.empleados;
    }

    getEmpleado(id: number) {
        return this.empleados[id];
    }

    agregarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado);
    }
}

export interface Empleado {
    nombre: string;
    apellido: string;
    cedula: string;
    img: string;
}
