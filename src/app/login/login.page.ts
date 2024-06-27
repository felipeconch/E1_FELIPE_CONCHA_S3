// src/app/login/login.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { StorageService } from '../services/storage.service';

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
    private router: Router,
    private location: Location,
    private storageService: StorageService
  ) { }

  login() {
    if (this.storageService.loginUser(this.username, this.password)) {
      this.message = 'Inicio de sesión exitoso';
      this.router.navigate(['/home']);
    } else {
      this.message = 'Nombre de usuario o contraseña incorrectos';
    }
  }

  goBack() {
    this.location.back();
  }
}