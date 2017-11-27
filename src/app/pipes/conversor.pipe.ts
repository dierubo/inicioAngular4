import { Pipe, PipeTransform } from '@angular/core';

// Decorador
@Pipe({
	name : 'conversor'
})

export class ConversorPipe implements PipeTransform {
	// Aquí se ejecutará toda la lógica de la PIPE
	transform(value, por) {
		
		let value_one = parseInt(value);
		let value_two = parseInt(por);

		let result = "La multiplicación: " + value_one + " x " + value_two + " = " + (value_one * value_two);

		return result;


	}
}