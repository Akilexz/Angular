import { Empleado } from './../models/empleado';
import {  } from './../models/empleado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {


  // tslint:disable-next-line:member-ordering
  EmpleadoArray: Empleado[] = [
    {id: 1, name: 'Richard', country: 'USA'},
    {id: 2, name: 'Lenin', country: 'USA'},
    {id: 3, name: 'Kevin', country: 'USA'}
  ];

     selectedEmpleado: Empleado = new Empleado();

 openForEdit(empleado: Empleado) {
   this.selectedEmpleado = empleado;
}
 // tslint:disable-next-line:one-line
 addOrEdit(){
   if (this.selectedEmpleado.id === 0) {
    this.selectedEmpleado.id = this.EmpleadoArray.length + 1;
    this.EmpleadoArray.push(this.selectedEmpleado);
   }
   this.selectedEmpleado = new Empleado();
 }
  delete() {
    this.EmpleadoArray = this.EmpleadoArray.filter(x => x !== this.selectedEmpleado);
    this.selectedEmpleado = new Empleado();
  }
}
