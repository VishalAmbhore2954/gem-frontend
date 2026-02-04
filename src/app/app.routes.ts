import { Routes } from '@angular/router';
import { Register } from './Component/UnAuth/register/register';
import { Login } from './Component/UnAuth/login/login';
import { Notfound } from './Component/Auth/notfound/notfound';
import { Stock } from './Component/Auth/stock/stock';
import { Home } from './Component/Auth/home/home';

export const routes: Routes = [
    { path: '', component:Home},
    { path: 'home', component:Home},
    { path: 'login', component:Login},
    { path: 'register', component:Register},
    { path: 'stock', component:Stock},
    { path: '**', component:Notfound}
];
