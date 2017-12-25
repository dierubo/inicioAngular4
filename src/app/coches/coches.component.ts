import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesServices } from '../services/peticiones.services'; // Importamos el servicio para poder utilizarlo

@Component({
	selector: 'coches',
	templateUrl: './coches.component.html',
	providers: [PeticionesServices], // Cargar el servicio en los providers del componente
})

export class CochesComponent {

	public coche: Coche;
	public coches:Array<Coche>;

	// Se pasa por parámetro el servicio que lo inicializamos en el constructor para poder usarlo en nuestra clase
	constructor( private _peticionesServices: PeticionesServices) {

		this.coche = new Coche("","","");
		this.coches = [
			new Coche("Seat Panda", "120", "Rojo"),
			new Coche("Renault", "110", "Azul"),
		]
	}

	ngOnInit() {
		//console.log(this._peticionesServices.getPrueba());
		// Para poder capturar la respuesta del servicio se usa el suscribe para el observable y con esto podemos recoger el resultado o el error
		this._peticionesServices.getArticulos().subscribe(
			result => {

			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);
			}
		)
	}

	onSubmit() {
		this.coches.push(this.coche);
		this.coche = new Coche("","","");
		console.log(this.coche);
	}
}