import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Estudiante } from 'src/models/estuadiante';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output()
  estudianteRegistrado: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
  @ViewChild(RegisterFormComponent) registerFormComponent: RegisterFormComponent = new RegisterFormComponent();

  subirEstudianteRegistrado(estudiante:Estudiante){
    this.estudianteRegistrado.emit(estudiante);
  }

  save(){
    this.registerFormComponent.registrarEstudiante();
  }

  clean(){
    this.registerFormComponent.cleanForm();
  }
}
