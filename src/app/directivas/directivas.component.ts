import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {

  usuarioLogeado = true

  usuarios = [
    {
      id: 1,
      nombre: "Jose",
      sueldo: 8000,
      activo: true
    },
    {
      id: 2,
      nombre: "Juan",
      sueldo: 8100,
      activo: true
    },
    {
      id: 3,
      nombre: "Pedro",
      sueldo: 8200,
      activo: false
    },
    {
      id: 4,
      nombre: "Daniel",
      sueldo: 8300,
      activo: true
    },
    {
      id: 5,
      nombre: "Maria",
      sueldo: 8400,
      activo: false
    },
    {
      id: 6,
      nombre: "Dana",
      sueldo: 8500,
      activo: false
    },
    {
      id: 7,
      nombre: "Ulises",
      sueldo: 8600,
      activo: true
    },
    {
      id: 8,
      nombre: "Valeria",
      sueldo: 8700,
      activo: false
    },
    {
      id: 9,
      nombre: "Alejandra",
      sueldo: 8800,
      activo: false
    },
    {
      id: 10,
      nombre: "Miguel",
      sueldo: 8900,
      activo: true
    }
  ]

}
