export class Orden {
    constructor(
    public idPO: number,
    public idCliente: number,
    public idRuta: number,
    public producto: string,
    public PONumber: string,
    public tipoCarga: string,
    public fechaCarga: Date,
    public direccionOrigen: string,
    public direccionDestino: string
    ) {}
}