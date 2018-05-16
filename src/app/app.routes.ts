import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { PortafolioItemComponent } from './components/portafolio-item/portafolio-item.component';

const app_routes: Routes =  [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portafolio-item', component: PortafolioItemComponent },
    { path: '**', component: PortafolioComponent }


];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
