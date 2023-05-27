import { Component, Input } from "@angular/core";
import { Estudiante } from "src/models/estuadiante";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent {  
  @Input()
  rows: Array<any> = [];

  @Input()
  inColumns: Array<Object> = [];

  messages = { emptyMessage: "No hay datos para mostrar" };
}
