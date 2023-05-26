import { TipoDocumento } from "./tipoDocumento";

export class Estudiante {
  tipoDocumento: TipoDocumento | undefined;
  documento: string | undefined;
  nombres: string | undefined;
  edad: number | undefined;

  constructor(
    tipoDocumento?: TipoDocumento,
    documento?: string,
    nombres?: string,
    edad?: number
  ) {
    this.tipoDocumento = tipoDocumento;
    this.documento = documento;
    this.nombres = nombres;
    this.edad = edad;
  }
}
