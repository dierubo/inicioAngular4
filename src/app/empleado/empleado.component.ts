import { Component } from '@angular/core';

@Component({ // Definimos el componente
	selector : 'empleado',
	templateUrl : './empleado.component.html'
})

export class EmpleadoComponent { // Se crea una clase para que se vea el componente.

	public tituloEmpleado = 'Titulo para el componente Empleado';

	private pruebaEmpleado = ' Soy un propiedad privada'; // Se mostrará pero no se debería

	public nombre:string = "Diegominola"; // Typescript es fuertemente tipado. Si metemos un int en el string saldra un error en el navegador

	public edad:number = 25; // Solamente para números

	public mayorDeEdad:boolean = true; // Solamente boolean

	public trabajos:Array<string> = ['Carpintero', 'Fontanero', 'Carnicero']; // Solamente array

	public anyArray:Array<any> = ['nada', 33, 'eaaa']; // Define un array con distintos tipos de elementos

	comodin:any = 'Cualquier cosa'; // Se define una variable que puede llevar cualquier tipo de datos

	public dePruebas:string;
	public nuevaEdad:number;
	public masMayor:boolean;

	// Constructor de la clase
	constructor() {
		this.dePruebas = "Esto es una propiedad de prueba";
		this.nuevaEdad = 31;
		this.masMayor = true;

	}

	ngOnInit() { // Funcion que se lanza al cargar el componente
		this.pruebaDeFuncion(this.dePruebas);
		this.cambiarEdad(44);
		console.log(this.nuevaEdad);


		// Variables y alcance
		var uno = 8;
		var dos = 15;

		if (uno === 8) {
			let uno = 3;
			var dos = 88;

			console.log("dentro UNO: " + uno);
			console.log("dentro DOS: " + dos);
		}

		console.log("fuera IF UNO: " + uno);
		console.log("fuera IF DOS: " + dos);
	}


	// Funciones o métodos
	pruebaDeFuncion(nombre) {
		console.log("Esto es una prueba de la función. " + nombre);
	}


	cambiarEdad(edad) {
		this.nuevaEdad = edad;
	}


}