import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  email: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(private router: Router) {}

  verificarLogin() {
    if(this.email === 'jasminjaramillo84@gmail.com' && this.password === 'jasmin') {
      this.router.navigate(['/workspace/OrderTaxi']);
    }
    else{
      this.mensajeError = 'Contraseña o email incorrectos';
    }
  }



}
