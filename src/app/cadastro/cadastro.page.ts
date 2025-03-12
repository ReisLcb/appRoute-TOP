import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class CadastroPage {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  cadastroForm: FormGroup;

  constructor() {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required]
    });
  }

  enviar() {
    if (this.cadastroForm.valid) {
      const dados = this.cadastroForm.value;
      console.log(dados);
      
      this.router.navigate(['/about'], { queryParams: dados });
    }
  }
}
