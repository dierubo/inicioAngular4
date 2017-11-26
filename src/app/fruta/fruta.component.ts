import { Component } from '@angular/core';
import { Fruta } from './fruta'; // Con este import lo que se hace es llamar al módulo de frutas

@Component({ // Definimos el componente
	// Propiedades
	selector : 'fruta',
	// Plantilla HTML a través de una URL
	templateUrl : './fruta.component.html'
	// Esto es una plantilla en linea con las comillas así ``
	// template : `
	// 	<h2>{{ nombre_componente }}</h2>
	// 	<p>{{ listado_frutas }}</p>
	// `
})

export class FrutaComponent { // Se crea una clase para que se vea el componente.

	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';


	public fruta:Fruta;
	public tiposFruta:Array<Fruta>;
	public fruta_temporada:boolean;
	public color:string;
	public colorSeleccionado:string;

	constructor() {
		this.fruta = new Fruta('Platano', 30, 'De color amarillo', true);
		this.tiposFruta = [
			new Fruta('Naranja', 10, 'Muy color naranja', true),
			new Fruta('Melón', 20, 'Verde y amarillo', false),
			new Fruta('Sandía', 5, 'Rojo brillante con pepitas', true)
		];

		this.fruta_temporada = true;
		this.color = 'green';
		this.colorSeleccionado = '#CCC';
	}

	ngOnInit() {
		console.log(this.fruta);
		console.log(this.tiposFruta);

	}

	cambiarTemporada(valor) {
		this.fruta_temporada = valor;
	}

	logColorSeleccionado() {
		console.log(this.colorSeleccionado);
	}

}