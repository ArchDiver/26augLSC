import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Mats for design
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatSidenavContent } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


// Helps with Breakpts and Screen size
import { LayoutModule } from '@angular/cdk/layout'
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';



const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  LayoutModule,
  CommonModule,
  RouterModule
]

const components = [
  ShellComponent
]

@NgModule({
  declarations: [
    // ShellComponent //moved to 'components'
    ...components
  ],
  imports: [
    // CommonModule //moved this up to 'modules'
    ...modules //'...' is called spread opperator (only used with Arrays)
  ],
  exports:[
    ...modules, //'...' is called spread opperator (only used with Arrays)
    ...components
  ]
})
export class SharedModule { }
