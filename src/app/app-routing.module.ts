import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./components/shared/clientes/clientes.component";
import { AgregarClienteComponent } from "./components/clientes/agregar-cliente/agregar-cliente.component";
import { InfoClienteComponent } from "./components/clientes/info-cliente/info-cliente.component";
import { RutasComponent } from "./components/shared/rutas/rutas.component";
import { AgregarRutaComponent } from "./components/rutas/agregar-ruta/agregar-ruta.component";

const routes: Routes = [
  { path: "", component: ClientesComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "agregarCliente", component: AgregarClienteComponent },
  { path: "infoCliente/:idCliente", component: InfoClienteComponent },
  { path: "clientes/editar/:idCliente", component: AgregarClienteComponent },
  { path: "rutas", component: RutasComponent },
  { path: "agregarRuta", component: AgregarRutaComponent },
  { path: "rutas/rutas/editar/:idRuta", component: AgregarRutaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
