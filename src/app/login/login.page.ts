// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; // Importa el servicio Location

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location // Inyecta el servicio Location
  ) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.message = 'Inicio de sesión exitoso';
      const redirectUrl = this.authService.redirectUrl || '/home';
      this.router.navigateByUrl(redirectUrl);
    } else {
      this.message = 'Nombre de usuario o contraseña incorrectos';
    }
  }

  goBack() {
    this.location.back(); // Utiliza el método back() del servicio Location
  }
}
