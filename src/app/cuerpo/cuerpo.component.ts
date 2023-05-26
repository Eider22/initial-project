import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Estudiante } from "src/models/estuadiante";
import { TipoDocumento } from "src/models/tipoDocumento";

@Component({
  selector: "app-cuerpo",
  templateUrl: "./cuerpo.component.html",
  styleUrls: ["./cuerpo.component.css"],
})
export class CuerpoComponent implements OnInit {
  constructor() {}

  columns = [
    { prop: "tipoDocumento.nombre", name:"Tipo de documento"},
    { prop: "documento" },
    { prop: "nombres" },
    { prop: "edad" },
  ];
  estudianteModel: Estudiante = new Estudiante();
  listaEstudiantes: Array<Estudiante> = [];

  tiposDocumentos: Array<TipoDocumento> = [
    new TipoDocumento(1, "Cedula de ciudadania", "CC"),
    new TipoDocumento(2, "Cedula Extranjeria", "CE"),
    new TipoDocumento(3, "Tarjeta Identidad", "TI"),
  ];

  ngOnInit(): void {}

  submitForm() {
    this.registrarEstudiante();
  }

  registrarEstudiante() {
    if (this.estudianteModel.tipoDocumento.value == 0) {
      return;
    }

    let tipoDoc = new TipoDocumento(1, "Cedula de ciudadania", "CC");

    if (this.estudianteModel.tipoDocumento.value == 2) {
      tipoDoc = new TipoDocumento(2, "Cedula Extranjeria", "CE");
    }

    if (this.estudianteModel.tipoDocumento.value == 3) {
      tipoDoc = new TipoDocumento(3, "Tarjeta Identidad", "TI");
    }

    this.estudianteModel.tipoDocumento = tipoDoc;

    this.listaEstudiantes.push(this.estudianteModel);
    this.listaEstudiantes = [...this.listaEstudiantes]
    this.estudianteModel = new Estudiante();
  }
}
