// src/app/services/storage.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageKey = 'users';

  constructor() { }

  // Obtener usuarios desde el almacenamiento
  private getUsers(): any[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  // Guardar usuarios en el almacenamiento
  private saveUsers(users: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  // Registrar un nuevo usuario
  registerUser(username: string, password: string): boolean {
    const users = this.getUsers();
    if (users.find(user => user.username === username)) {
      return false; // Usuario ya existe
    }
    users.push({ username, password });
    this.saveUsers(users);
    return true;
  }

  // Iniciar sesión de usuario
  loginUser(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(user => user.username === username && user.password === password);
    return !!user;
  }
}