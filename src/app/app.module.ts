import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { MenuComponent } from "./components/shared/menu/menu.component";
import { ContentComponent } from "./components/shared/content/content.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { SettingsComponent } from "./components/shared/settings/settings.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ClientesComponent } from "./components/shared/clientes/clientes.component";
import { AgregarClienteComponent } from "./components/clientes/agregar-cliente/agregar-cliente.component";
import { RutasComponent } from "./components/shared/rutas/rutas.component";
import { AgregarRutaComponent } from "./components/rutas/agregar-ruta/agregar-ruta.component";
import { InfoClienteComponent } from "./components/clientes/info-cliente/info-cliente.component";
import { LadaPipe } from './pipes/lada.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CargasComponent } from './components/cargas/cargas.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AgregarProveedoresComponent } from './components/proveedores/agregar-proveedores/agregar-proveedores.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { AgregarOrdenComponent } from './components/ordenes/agregar-orden/agregar-orden.component';
import { InfoProveedorComponent } from './components/proveedores/info-proveedor/info-proveedor.component';
import { AgregarCargaComponent } from './components/cargas/agregar-carga/agregar-carga.component';
import { SeccionAdminComponent } from './components/seccion-admin/seccion-admin.component';
import { CuentasCobrarComponent } from './components/seccionAdmin/cuentas-cobrar/cuentas-cobrar.component';
import { CuentasPagarComponent } from './components/seccionAdmin/cuentas-pagar/cuentas-pagar.component';
import { LoginComponent } from './components/login/login.component';
import { InfoOrdenesComponent } from './components/ordenes/info-ordenes/info-ordenes.component';
import { InfoCargasComponent } from './components/cargas/info-cargas/info-cargas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingsComponent,
    ClientesComponent,
    AgregarClienteComponent,
    RutasComponent,
    AgregarRutaComponent,
    InfoClienteComponent,
    LadaPipe,
    CargasComponent,
    ProveedoresComponent,
    AgregarProveedoresComponent,
    OrdenesComponent,
    AgregarOrdenComponent,
    InfoProveedorComponent,
    AgregarCargaComponent,
    SeccionAdminComponent,
    CuentasCobrarComponent,
    CuentasPagarComponent,
    LoginComponent,
    InfoOrdenesComponent,
    InfoCargasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
