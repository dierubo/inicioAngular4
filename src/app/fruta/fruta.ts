// Con esto se crea un módulo

export class Fruta {

	// public nombre:string;
	// public tiempoMaduracion:number;

	// constructor(nombre, tiempoMaduracion) {
	// 	this.nombre = nombre;
	// 	this.tiempoMaduracion = tiempoMaduracion;
	// }

	constructor( // De esta forma lo que se hace es inicializar las propiedades y pasarlas por parámetro de forma directa. Se ahorra más tiempo que con la forma 
		// comentada más arriba
		public nombre:string,
		public tiempoMaduracion:number,
		public caracteristicas:string,
		public estaRica:boolean
	){}
}