import { Component, EventEmitter, Output } from "@angular/core";
import { Estudiante } from "src/models/estuadiante";
import { TipoDocumento } from "src/models/tipoDocumento";

export interface IEstudentRegisterForm {
  typeDocumentSelected: string;
}

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"],
})
export class RegisterFormComponent {
  constructor() {}

  estudianteModel: Estudiante = new Estudiante();
  /**Esta data probablemente será consumida de una api */
  tiposDocumentos: Array<TipoDocumento> = [];

  formModels: IEstudentRegisterForm = {
    typeDocumentSelected: "0",
  };

  @Output()
  estudianteRegistrado: EventEmitter<Estudiante> =
    new EventEmitter<Estudiante>();

  ngOnInit(): void {
    this.getData();
  }

  submitForm() {
    this.registrarEstudiante();
  }

  registrarEstudiante() {
    if (!this.validateData()) return;
    /**save student → api */
    this.updateTable();
    this.cleanForm();
  }

  validateData(): boolean {
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
      return false;
    }

    this.estudianteModel.tipoDocumento = tipoDocumentoSeleccionado;
    return true;
  }

  getData() {
    this.tiposDocumentos = [
      new TipoDocumento("1", "Cedula de ciudadania", "CC"),
      new TipoDocumento("2", "Cedula Extranjeria", "CE"),
      new TipoDocumento("3", "Tarjeta Identidad", "TI"),
    ];
  }

  updateTable() {
    this.estudianteRegistrado.emit(this.estudianteModel);
  }

  cleanForm() {
    this.estudianteModel = new Estudiante();
    this.formModels.typeDocumentSelected = "0";
  }
}
