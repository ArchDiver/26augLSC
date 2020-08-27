import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeComponent } from './topfive-home/topfive-home.component';
import { OtisComponent } from './topfive-otis/topfive-otis.component';
import { BeatlesComponent } from './topfive-beatles/topfive-beatles.component';
import { JesseComponent } from './topfive-jesse/topfive-jesse.component';
import { RayComponent } from './topfive-ray/topfive-ray.component';
import { GorillazComponent } from './topfive-gorillaz/topfive-gorillaz.component';

// Adding Dependency Injection import for the shared module
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtisComponent,
    BeatlesComponent,
    JesseComponent,
    RayComponent,
    GorillazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
