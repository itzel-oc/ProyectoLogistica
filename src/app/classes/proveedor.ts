export class Proveedor {
  constructor(
    public idProveedor: number,
    public idRuta: number,
    public nombre: string,
    public RFC: string,
    public contacto: string,
    public telefono: string,
    public email: string,
    public direccion: string,
    public ciudad: string,
    public CP: string,
    public estado: string,
    public pais: string,
    public diasCredito: number,
    public limiteCredito: number
  ) {}
}
