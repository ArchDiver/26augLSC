import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeatlesComponent  } from './topfive-beatles/topfive-beatles.component';
import { GorillazComponent } from './topfive-gorillaz/topfive-gorillaz.component';
import { HomeComponent } from './topfive-home/topfive-home.component';
import { JesseComponent } from './topfive-jesse/topfive-jesse.component';
import { OtisComponent } from './topfive-otis/topfive-otis.component';
import { RayComponent } from './topfive-ray/topfive-ray.component';


const routes: Routes = [
  {path: 'beatles', component: BeatlesComponent},
  {path: 'gorillaz', component: GorillazComponent},
  {path: '', component: HomeComponent},
  {path: 'jesse', component:JesseComponent},
  {path: 'otis', component:OtisComponent},
  {path: 'ray', component:RayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
