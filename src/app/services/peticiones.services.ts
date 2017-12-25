import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; // Mapear la respuesta HTTP
import { Observable } from 'rxjs/Observable'; // Utilizar la respuesta para mapearla del módulo rxjs

@Injectable()
export class PeticionesServices {

	public url:string;

	private _http: Http;

	constructor(_http) {
		this.url = 'https://jsonplaceholder.typicode.com/posts';
	}

	getPrueba() {
		return 'Vuelve string';
	}

	getArticulos() {
		return this._http.get(this.url)
						  .map(res => res.json()) // Recoger una petición de la respuesta del http en la función callback y luego convertir el json en objeto JS
						  						  // Con la función res.json, que es el parámetro de la función de callback de http
	}
}