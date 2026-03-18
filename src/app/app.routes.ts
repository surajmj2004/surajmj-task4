import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { Detailpage } from './detailpage/detailpage';

export const routes: Routes = [
    { path : '',component:Home},
    { path : 'product',component:Product},
    { path : 'product/:id',component:Detailpage},
    { path : 'contact',component:Contact}
];
