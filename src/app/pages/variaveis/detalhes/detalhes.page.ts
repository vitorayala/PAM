import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-detalhes',
    templateUrl: './detalhes.page.html',
    styleUrls: ['./detalhes.page.scss'],
  })

export class DetalhesPage implements OnInit {
 nome: string;
 idade: number;
 sexo: string;
 s: string;
 altura: number;
 peso: number;
 imc: number;
 clas: string;

 constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      let state = this.router.getCurrentNavigation().extras.state; if (state) {
        this.nome = state.nome;
        this.idade = state.idade;
        this.s = state.sexo;
        this.altura = state.altura;
        this.peso = state.peso;

        this.imc = this.peso / (this.altura * this.altura);
//IMC Masculino
        if (this.s == "m") {
          this.sexo = "Masculino";
//Verificação da Classificação
          if(this.imc < 20){
            this.clas = "Abaixo do Peso"
          }
          else if(this.imc >= 20 && this.imc < 25){
           this.clas = "Normal"
          }
          else if(this.imc >= 25 && this.imc < 30){
            this.clas = "Obesidade Leve"
          }
          else if(this.imc >= 30 && this.imc < 40){
            this.clas = "Obesidade Moderada"
          }
          else if(this.imc >= 40){
            this.clas = "Obesidade Mórbida"
          }
//IMC Feminino
        } else {
          this.sexo = "Feminino";
//Verificação da Classificação
          if(this.imc < 19){
            this.clas = "Abaixo do Peso"
          }
          else if(this.imc >= 19 && this.imc < 24){
            this.clas = "Normal"
          }
          else if(this.imc >= 24 && this.imc < 29){
            this.clas = "Obesidade Leve"
          }
          else if(this.imc >= 29 && this.imc < 39){
            this.clas = "Obesidade Moderada"
          }
          else if(this.imc >= 39){
            this.clas = "Obesidade Mórbida"
        }

        }
      }
    });
  }
 
 ngOnInit() {
 }
}
