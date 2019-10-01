export interface IProveedor {
  id: number;
  idRuta: number;
  nombre: string;
  RFC: string;
  contacto: string;
  telefono: string;
  email: string;
  direccion: string;
  ciudad: string;
  CP: string;
  estado: string;
  pais: string;
  diasCredito: number;
  limiteCredito: number;
  createdAt: Date;
  updatedAt: Date;
}
