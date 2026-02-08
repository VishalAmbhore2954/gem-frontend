import { Routes } from '@angular/router';
import { Register } from './Component/UnAuth/register/register';
import { Login } from './Component/UnAuth/login/login';
import { Notfound } from './Component/Auth/notfound/notfound';
import { Stock } from './Component/Auth/stock/stock';
import { Home } from './Component/Auth/home/home';
import { StockMasterList } from './Component/Auth/stock-master-list/stock-master-list';
import { StockList } from './Component/Auth/stock-list/stock-list';
import { InventoryCards } from './Component/Auth/inventory-cards/inventory-cards';
import { TaggingPanel } from './Component/Auth/tagging-panel/tagging-panel';

export const routes: Routes = [
    { path: '', component:Home},
    { path: 'home', component:Home},
    { path: 'login', component:Login},
    { path: 'register', component:Register},
    { path: 'stock', component:Stock},
    { path: 'stock-master-list', component:StockMasterList},
    { path: 'inventory-cards', component:InventoryCards},
    { path: 'stock-list', component:StockList},
    { path: 'tagging-panel', component:TaggingPanel},
    { path: 'tagging-panel/:id', component:TaggingPanel},
    { path: '**', component:Notfound}
];
