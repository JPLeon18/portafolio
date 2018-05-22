import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { PortafolioItemComponent } from './components/portafolio-item/portafolio-item.component';
import { SearchComponent } from './components/search/search.component';

const app_routes: Routes =  [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portafolio-item/:id', component: PortafolioItemComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', component: PortafolioComponent }


];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
