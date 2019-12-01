export interface IOrden {
    idPO: number;
    idCliente: number;
    idRuta: number;
    producto: string;
    PONumber: string;
    tipoCarga: string;
    fechaCarga: Date;
    direccionOrigen: string;
    direccionDestino: string;
}
