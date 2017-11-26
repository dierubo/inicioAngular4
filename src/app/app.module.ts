// Todos los componentes para que funcionen de manera global. Aquí se cargan todos los componentes y directivas
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importante este módulo para poder hacer el two data bindings
import { routing, appRoutingProviders } from './app.routing'; // Para cargar el routing 

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [ // Aquí se declaran los componentes
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Importante este módulo para poder hacer el two data bindings
    routing, // Cargar el módulo de rutas
  ],
  providers: [
    appRoutingProviders, // Cargar el providers de ruta. El servicio que hace que el router se lanze y funcione cada ruta que llamemos
  ],
  bootstrap: [AppComponent] // componente inicial el cual se lanza la aplicacion
})
export class AppModule { }
