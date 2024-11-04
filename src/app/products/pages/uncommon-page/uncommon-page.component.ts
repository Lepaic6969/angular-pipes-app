import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select
  public name:string='Juan Camilo';
  public gender:'male'| 'female'='male';
  public invitationMap={
    'male':'invitarlo',
    'female':'invitarla '
  }

  changeClient():void{
    this.name='Laura Gustín';
    this.gender='female';
  }

  //i18nPlural y Slice(En el slice sólo uso el arreglo)
  public clients:string[]=['María','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];
  public clientsMap={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos 1 cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando'
  }
  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person={
    name:'Juan Camilo',
    age:29,
    address:'Bogota DC, Colombia'
  }

  //Async Pipe
  public myObservableTimer:Observable<number>=interval(2000); //Cada 2 segundos emite el siguiente valor
  public myPromise:Promise<String>=new Promise(resolve=>{
    setTimeout(() => {
      resolve('Tenemos un dato de la promesa');
      console.log("Tenemos la data de la promesa");
    }, 3500);
  });

}
