import { Component, signal } from '@angular/core';
import { UnauthLayout } from './Component/UnAuth/unauth-layout/unauth-layout';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UnauthLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gemsmith-frontend');

  get UnAuthRoutes(){
    return [
      '/login',
      '/register'
    ]
  }
}
