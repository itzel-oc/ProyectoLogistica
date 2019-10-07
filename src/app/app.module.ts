import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

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
    LadaPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
