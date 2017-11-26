import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // etiqueta de la vista
  templateUrl: './app.component.html', // Se le asigna una vista
  styleUrls: ['./app.component.css'] // Se define una serie de estilos css para el componente
})
export class AppComponent {
  title = 'Componente principal APP';
}
