import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    //Este es el método que se debe implementar para la transformación visual de la data.
    transform(value: string ,toUpper:boolean=false) {

        return (toUpper)?value.toLocaleUpperCase():value.toLowerCase();
    }
}