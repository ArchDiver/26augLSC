import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopfiveHomeComponent } from './topfive-home/topfive-home.component';
import { TopfiveOtisComponent } from './topfive-otis/topfive-otis.component';
import { TopfiveBeatlesComponent } from './topfive-beatles/topfive-beatles.component';
import { TopfiveJesseComponent } from './topfive-jesse/topfive-jesse.component';
import { TopfiveRayComponent } from './topfive-ray/topfive-ray.component';
import { TopfiveGorillazComponent } from './topfive-gorillaz/topfive-gorillaz.component';

@NgModule({
  declarations: [
    AppComponent,
    TopfiveHomeComponent,
    TopfiveOtisComponent,
    TopfiveBeatlesComponent,
    TopfiveJesseComponent,
    TopfiveRayComponent,
    TopfiveGorillazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
