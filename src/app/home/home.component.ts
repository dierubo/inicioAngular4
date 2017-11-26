import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service'; // Importar el servicio

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	providers: [RopaService] // Cargar el servicio dentro del componente. Crear una instancia del servicio. Una vez instanciado se puede usar dentro de la clase
})

export class HomeComponent {
	
	public titulo = "Página principal de la home";
	public listadoRopa:Array<string>;
	public prendaGuardar:string;

	constructor(
		private _ropaService: RopaService // De esta forma tengo una instancia en la clase del servicio
	){}

	ngOnInit() {
		// Llamada a la variable declarada en la clase y luego se llama al método 'prueba' ya que se ha importado el servicio
		//this._ropaService.prueba('Camiseta');
		//console.log(this._ropaService.prueba('Camiseta'));

		this.listadoRopa = this._ropaService.getRopa();
		console.log(this.listadoRopa);		
	}

	guardarPrenda() {
		this._ropaService.addRopa(this.prendaGuardar);
		this.prendaGuardar = null;
	}

	eliminarPrenda(index:number) {
		console.log(index);
		this._ropaService.deleteRopa(index);
	}
}