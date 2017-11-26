// Los servicios son clases con unos objetivos claros que nos facilitan la reutilización de código y son un tipo de componentes o una parte de la 
// arquitectura de la aplicación que nos va a permitir separar un poco de lógica del componente y llevarnosla al servicio. Sobre todo trabajo con APIS,
// con el HTTP y que después mediante la inyección de dependencias podemos utilizar otros componentes principales.
import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {

	public nombre_prenda = 'Pantalones Vaqueros';
	public coleccionRopa = ['Pantalones blancos', 'Camiseta roja'];

	prueba(nombre_prenda) {
		return nombre_prenda;
	}

	// Le llega un parámetro de tipo STRING y devuelve un ARRAY de STRING
	addRopa(nombrePrenda:string):Array<string> {
		this.coleccionRopa.push(nombrePrenda);

		return this.getRopa();
	}

	getRopa() {
		return this.coleccionRopa;
	}

	deleteRopa(index:number):Array<string> {
		this.coleccionRopa.splice(index, 1);

		return this.getRopa();
	}
}