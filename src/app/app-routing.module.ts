import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./modules/home/home.module').then(m =>m.HomeModule)
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
