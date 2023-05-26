export class TipoDocumento {
  value: number;
  nombre: String;
  alias: String;
  constructor(value:number, nombre:string, alias:string) {
    this.value = value;
    this.nombre = nombre;
    this.alias = alias;
  }
}
