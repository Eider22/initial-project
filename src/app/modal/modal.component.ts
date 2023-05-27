import { Component, EventEmitter, Output } from '@angular/core';
import { Estudiante } from 'src/models/estuadiante';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output()
  estudianteRegistrado: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();

  subirEstudianteRegistrado(estudiante:Estudiante){
    this.estudianteRegistrado.emit(estudiante);
  }
}
