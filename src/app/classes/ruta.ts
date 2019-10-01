export class Ruta {
  constructor(
    public idRuta: number,
    public nombre: string,
    public cdOrigen: string,
    public CPOrigen: string,
    public edoOrigen: string,
    public paisOrigen: string,
    public cdDestino: string,
    public CPDestino: string,
    public edoDestino: string,
    public paisDestino: string
  ) {}
}
