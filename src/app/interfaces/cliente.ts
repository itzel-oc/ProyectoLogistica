export interface ICliente {
  id: number;
  nombre: string;
  contacto: string;
  telefono: string;
  email: string;
  direccion: string;
  ciudad: string;
  estado: string;
  pais: string;
  CP: string;
  RFC: string;
  diasCredito: number;
  limiteCredito: number;
  createdAt: Date;
  updatedAt: Date;
}
