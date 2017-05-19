import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { HeroComponent }  from './hero/hero.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    HeroComponent,
    HeroDetailComponent
  ],
  bootstrap: [ HeroComponent ]
})
export class AppModule { }
