import { Component } from '@angular/core';
import { Estudiante } from 'src/models/estuadiante';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
  /**Esta data probablemente será consumida de una api */
  listaEstudiantes: Array<Estudiante> = [];
  columns = [
    { prop: "tipoDocumento.nombre", name: "Tipo de documento" },
    { prop: "documento" },
    { prop: "nombres" },
    { prop: "edad" },
  ];

  agregarEstudiante(estudiante: Estudiante){
    this.listaEstudiantes.push(estudiante);
    this.listaEstudiantes = [...this.listaEstudiantes];
  }
}
