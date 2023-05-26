import { TipoDocumento } from "./tipoDocumento";

export class Estudiante {
  tipoDocumento: TipoDocumento;
  documento: string;
  nombres: string;
  edad: string;

  constructor() {
    this.tipoDocumento = new TipoDocumento(0, '', '');
    this.documento = "";
    this.nombres = "";
    this.edad = "";
  }
}
