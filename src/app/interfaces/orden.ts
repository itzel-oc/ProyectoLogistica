export interface IOrden {
    idPO: number;
    idCliente: number;
    idRuta: number;
    producto: string;
    tipoCarga: string;
    fechaCarga: Date;
    direccionOrigen: string;
    direccionDestino: string;
}
