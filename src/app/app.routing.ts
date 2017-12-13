// Importar los módulos para que funcione el router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

// DEfinir una variable un array de objetos Routes. Configuración de la ruta.
const appRoutes: Routes = [
	{ path: '', component: HomeComponent }, // Para la página HOME
	{ path: 'empleado', component: EmpleadoComponent},
	{ path: 'fruta', component: FrutaComponent},
	{ path: 'home', component: HomeComponent},
	{ path: 'contacto', component: ContactoComponent},
	{ path: 'contacto/:page', component: ContactoComponent}, // Ruta de contacto con parámetros
	{ path: 'coches', component: CochesComponent}, // Ruta para coches
	{ path: '**', component: HomeComponent} // URL por defecto cuando la ruta falle
];

//Exportar la variable. Array de any, de cualquier tipo vacío. Procedimiento que necesita hacer angular para poder cargar el provider de la ruta
export const appRoutingProviders: any[] = [];

//Exportar routing del tipo ModuleWithProviders. Método de RouterModule le indicamos que array de ruta tiene que cargar
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);