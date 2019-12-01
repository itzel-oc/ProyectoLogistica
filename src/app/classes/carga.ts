export class Carga {
  constructor(
    public idCarga: number,
    public idProveedor: number,
    public idPO: number,
    public peso: number,
    public numCajas: number,
    public numPallets: number,
    public temperatura: number,
    public fechaDescarga: Date,
    public precioCliente: number,
    public costoProveedor: number,
    public estatusCarga: string,
    public estatusPago: string,
    public estatusPagoProveedor: string,
    public comisionBroker: number,
    public metodoPago: string,
    public idAgenciaAduanal: number,
    public placasTractor: string,
    public ecoTractor: string,
    public codigoAlpha: string,
    public caat: string,
    public ecoThermo: string,
    public placas: string,
    public pies: string,
    public nombreOperador: string,
    public numOperador: string
  ) { }
}
