export class TipoDocumento {
  id: string;
  nombre: String;
  alias: String;
  constructor(id:string, nombre:string, alias:string) {
    this.id = id;
    this.nombre = nombre;
    this.alias = alias;
  }
}
