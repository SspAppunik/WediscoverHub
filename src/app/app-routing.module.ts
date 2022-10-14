import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WediscoverComponent } from './wediscover/wediscover.component';

const routes: Routes = [
  { path: '' , component : HomeComponent},
  { path: 'WeDiscover' ,component: WediscoverComponent},
  { path: 'WeMeet', loadChildren: () => import('./wemeet/wemeet.module').then(m => m.WemeetModule) },
  { path: 'WeIntro', loadChildren: () => import('./weintro/weintro.module').then(m => m.WeintroModule) },
  { path: 'WeGrow', loadChildren: () => import('./wegrow/wegrow.module').then(m => m.WegrowModule) },
  { path: 'WeShop', loadChildren: () => import('./weshop/weshop.module').then(m => m.WeshopModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
