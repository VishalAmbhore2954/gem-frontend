import { Component, signal, computed } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UnauthLayout } from './Component/UnAuth/unauth-layout/unauth-layout';
import { AuthLayout } from './Component/Auth/auth-layout/auth-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UnauthLayout, AuthLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private unauthRoutes = ['/login', '/register'];

  private currentUrl = signal(''); // safe default

  constructor(private router: Router) {
    // now router EXISTS
    this.currentUrl.set(this.router.url);

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.currentUrl.set(this.router.url);
      });
  }

  isUnauthRoute = computed(() =>
    this.unauthRoutes.includes(this.currentUrl())
  );

  isAuthRoute = computed(() => !this.isUnauthRoute());
}
