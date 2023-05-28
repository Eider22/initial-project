import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { Estudiante } from "src/models/estuadiante";
import { RegisterFormComponent } from "../register-form/register-form.component";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements AfterViewInit {
  @Output()
  estudianteRegistrado: EventEmitter<Estudiante> =
    new EventEmitter<Estudiante>();
  @ContentChild(RegisterFormComponent)
  registerFormComponent: RegisterFormComponent = new RegisterFormComponent();

  save() {
    this.registerFormComponent.registrarEstudiante();
  }

  clean() {
    this.registerFormComponent.cleanForm();
  }

  ngAfterViewInit() {
    const myForm: NgForm = this.registerFormComponent.myForm;
    console.log("myForm:", myForm);
  }

  testHideBsModal() {
    console.log("test bootstrap hide.bs.modal event");
  }

  testShowBsModal() {
    console.log("test bootstrap show.bs.modal event");
  }

}
