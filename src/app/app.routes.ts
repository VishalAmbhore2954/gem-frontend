import { Routes } from '@angular/router';
import { Register } from './Component/UnAuth/register/register';
import { Login } from './Component/UnAuth/login/login';

export const routes: Routes = [
    { path: 'login', component:Login},
    { path: 'register',component:Register}
];
