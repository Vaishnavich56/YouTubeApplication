import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { Screen1Component } from './Component/screen1/screen1.component';
import { Screen2Component } from './Component/screen2/screen2.component';
import { Screen3Component } from './component/screen3/screen3.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'screen1', component: Screen1Component},
  {path: 'screen2', component: Screen2Component},
  {path: 'screen3', component: Screen3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
