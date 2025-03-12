import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  imports: [IonicModule, CommonModule, NgFor]
})


export class AboutPage {
  
  // Adicionar essa linha, importar o AtivateRoute 
  route = inject(ActivatedRoute)
  router = inject(Router);
  
  dados:any;
  listaCadastro:any[]; // Recebe os usuários, mas é resetada ao início do construtor toda vez que a página reinicia.
  listaCadastroMantida:any // Guarda os usuários contidos em listaCadastro para manter os usuários cadastrados sem que haja perdas na reinicialização da página
  // Ao receber os valores de listaCadastro, listaCadastroMantida é percorrida com ngFor na interface html; apresenta-nos os usuários cadastrados

  //Adicionar no constructor 
  constructor() {
    this.listaCadastro = [] // valor da propriedade é setada para []

    this.route.queryParams.subscribe(parms => {
      this.dados = parms; // pode conter vários usuários
      this.listaCadastro.push(this.dados) // guarda os usuários dentro do vetor
      console.log(this.listaCadastro); // log para verificar se os usuários existem

      this.listaCadastroMantida = this.listaCadastro // "Backup" dos usuários cadastrados
    })
   
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}
