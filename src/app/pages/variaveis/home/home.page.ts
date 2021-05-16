import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
    constructor(private router: Router) {
      
     }
      nome: String;
      idade: Number;
      sexo: String;
      altura: Number;
      peso: Number;

      getValores(){
        console.log(this.nome);
        console.log(this.idade);
        console.log(this.sexo);
        console.log(this.altura);
        console.log(this.peso);
      }
      
      enviar(){
        let navigationExtras: NavigationExtras = {
        state: {
          nome: this.nome,
          idade: this.idade,
          sexo: this.sexo,
          altura: this.altura,
          peso: this.peso,
        }
      }
      this.router.navigate(['variaveis/detalhes'], navigationExtras);
    }
 ngOnInit() {
 }
}