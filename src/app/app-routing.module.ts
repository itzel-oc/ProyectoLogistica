import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./components/shared/clientes/clientes.component";
import { AgregarClienteComponent } from "./components/clientes/agregar-cliente/agregar-cliente.component";
import { InfoClienteComponent } from "./components/clientes/info-cliente/info-cliente.component";
import { RutasComponent } from "./components/shared/rutas/rutas.component";
import { AgregarRutaComponent } from "./components/rutas/agregar-ruta/agregar-ruta.component";
import { CargasComponent } from './components/cargas/cargas.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AgregarProveedoresComponent } from './components/proveedores/agregar-proveedores/agregar-proveedores.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { AgregarOrdenComponent } from './components/ordenes/agregar-orden/agregar-orden.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'agregarCliente', component: AgregarClienteComponent },
  { path: 'infoCliente/:idCliente', component: InfoClienteComponent },
  { path: 'clientes/editar/:idCliente', component: AgregarClienteComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'agregarRuta', component: AgregarRutaComponent },
  { path: 'rutas/editar/:idRuta', component: AgregarRutaComponent },
  { path: 'fletes', component: CargasComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'agregarProveedor', component: AgregarProveedoresComponent },
  { path: 'proveedores/editar/:idProveedor', component: AgregarProveedoresComponent },
  { path: 'ordenes', component: OrdenesComponent },
  { path: 'agregarOrden', component: AgregarOrdenComponent },
  { path: 'ordenes/editar/:idPO', component: AgregarOrdenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
