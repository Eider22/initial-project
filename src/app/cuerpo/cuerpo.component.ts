import { Component, OnInit } from "@angular/core";
import { Estudiante } from "src/models/estuadiante";
import { TipoDocumento } from "src/models/tipoDocumento";

export interface IEstudentRegisterForm {
  typeDocumentSelected: string;
}
@Component({
  selector: "app-cuerpo",
  templateUrl: "./cuerpo.component.html",
  styleUrls: ["./cuerpo.component.css"],
})
export class CuerpoComponent implements OnInit {
  constructor() {}

  estudianteModel: Estudiante = new Estudiante();
  /**Esta data probablemente será consumida de una api */
  listaEstudiantes: Array<Estudiante> = [];
  /**Esta data probablemente será consumida de una api */
  tiposDocumentos: Array<TipoDocumento> = [];

  formModels: IEstudentRegisterForm = {
    typeDocumentSelected: "0",
  };

  columns = [
    { prop: "tipoDocumento.nombre", name: "Tipo de documento" },
    { prop: "documento" },
    { prop: "nombres" },
    { prop: "edad" },
  ];

  ngOnInit(): void {
    this.getData();
  }

  submitForm() {
    this.registrarEstudiante();
  }

  registrarEstudiante() {
    const tipoDocumentoSeleccionado: TipoDocumento | undefined =
      this.tiposDocumentos.find(
        (documento) =>
          documento.id.toString() ===
          this.formModels.typeDocumentSelected.toString()
      );

    if (!tipoDocumentoSeleccionado) {
      /**TODO
       * Retornar información para mostrar error al cliente →  'Seleccione un tipo de documento'*/
      alert("Seleccione un tipo de documento");
      return;
    }

    this.estudianteModel.tipoDocumento = tipoDocumentoSeleccionado;
    this.updateTable();
    this.cleanForm();
  }

  getData() {
    this.tiposDocumentos = [
      new TipoDocumento("1", "Cedula de ciudadania", "CC"),
      new TipoDocumento("2", "Cedula Extranjeria", "CE"),
      new TipoDocumento("3", "Tarjeta Identidad", "TI"),
    ];
  }

  updateTable() {
    this.listaEstudiantes.push(this.estudianteModel);
    this.listaEstudiantes = [...this.listaEstudiantes];
  }

  cleanForm() {
    this.estudianteModel = new Estudiante();
    this.formModels.typeDocumentSelected = "0";
  }
}
