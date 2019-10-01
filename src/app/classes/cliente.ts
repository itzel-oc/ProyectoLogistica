export class Cliente {
  constructor(
    public idCliente: number,
    public nombre: string,
    public contacto: string,
    public telefono: string,
    public email: string,
    public direccion: string,
    public ciudad: string,
    public CP: string,
    public estado: string,
    public pais: string,
    public RFC: string,
    public diasCredito: number,
    public limiteCredito: number
  ) {}
}
