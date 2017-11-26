import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; // Sirve para poder utilizar el router con parámetros. Que la URL recibe parámetros
																	// REcoger parámetros

@Component({
	selector: 'contacto',
	templateUrl: './contacto.component.html'
})

export class ContactoComponent {
	public titulo = "Página de contacto de la web";

	public parametro; 

	constructor( // Para inyectar los servicios de rounting con parámetros hay que hacerlo con un constructor y así poder usar los objetos.
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit() {
		// La función de flecha en la función callBack porque nos permite acceder a los parámetros/propiedades y funciones de la clase dentro de la función de callBack.
		// Si no usamos la flecha, solamente tendríamos esto 'function (params: Params)' pues estaríamos acotado a lo que tendríamos dentro de la función.
		this._route.params.forEach((params: Params) => { // Esto lo que hace es recoger todos los parámetros y recorrerlos. 
																//Luego hacemos una función callBack con "function(params: Params)"
			this.parametro = params['page'];  // 'Page' es el parámetro definido en el app.routing
		}) 
															 
	}

	redirigir() {
		// Método que permite redirigir
		this._router.navigate(['/contacto', 'parametro a traves del boton']);
	}

	redirigirDos() {
		// Método que permite redirigir
		this._router.navigate(['/']);
	}
}