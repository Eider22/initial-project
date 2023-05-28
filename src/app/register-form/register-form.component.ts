import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
  FormControl,
} from "@angular/forms";
import { Estudiante } from "src/models/estuadiante";
import { TipoDocumento } from "src/models/tipoDocumento";
@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"],
})
export class RegisterFormComponent {
  constructor(private fb: FormBuilder) {}
  /**Ya no se necesita , se puede borrar */
  @ViewChild("myForm") myForm!: NgForm;

  studentFormGroup!: FormGroup;
  estudianteModel: Estudiante = new Estudiante();
  /**Esta data probablemente será consumida de una api */
  tiposDocumentos: Array<TipoDocumento> = [];

  @Output()
  estudianteRegistrado: EventEmitter<Estudiante> =
    new EventEmitter<Estudiante>();

  ngOnInit(): void {
    this.getData();

    this.studentFormGroup = this.fb.group({
      tipoDocumento: ["0", [Validators.required, this.typeDocumentValidation]],
      documento: ["", [Validators.required]],
      nombres: ["", [Validators.required]],
      edad: ["", [Validators.required]],
    });
  }

  submitForm() {
    console.log("this.myForm → ", this.myForm);
    this.registrarEstudiante();
  }

  registrarEstudiante() {
    if (!this.validateData()) return;
    /**TODO:save student → api */
    this.updateTable();
    this.cleanForm();
  }

  validateData(): boolean {
    // console.log("--------", this.studentFormGroup.controls["tipoDocumento"])
    // this.typeDocumentValidation(this.studentFormGroup.controls["tipoDocumento"] as FormControl);

    const tipoDocumentoSeleccionado: TipoDocumento | undefined =
      this.tiposDocumentos.find(
        (documento) =>
          documento.id.toString() ===
          this.studentFormGroup.controls["tipoDocumento"].value.toString()
      );

    if (
      !tipoDocumentoSeleccionado ||
      this.studentFormGroup.controls["documento"].value == "" ||
      this.studentFormGroup.controls["nombres"].value == "" ||
      this.studentFormGroup.controls["edad"].value == ""
    ) {
      /**TODO
       * Retornar información para mostrar error al cliente →  'Seleccione un tipo de documento'*/
      return false;
    }
    this.buildStudent(tipoDocumentoSeleccionado);

    return true;
  }

  buildStudent(tipoDocumentoSeleccionado: TipoDocumento) {
    this.estudianteModel.tipoDocumento = tipoDocumentoSeleccionado;
    this.estudianteModel.documento =
      this.studentFormGroup.controls["documento"].value;
    this.estudianteModel.nombres =
      this.studentFormGroup.controls["nombres"].value;
    this.estudianteModel.edad = this.studentFormGroup.controls["edad"].value;
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
    this.studentFormGroup.controls["tipoDocumento"].setValue("0");
    this.studentFormGroup.controls["documento"].setValue("");
    this.studentFormGroup.controls["nombres"].setValue("");
    this.studentFormGroup.controls["edad"].setValue("");
  }

  typeDocumentValidation(control: FormControl) {
    return control.value !== "0"
      ? null
      : { selectTypeDocumentError: "Debe seleccionar un tipo de documento" };
  }
}
