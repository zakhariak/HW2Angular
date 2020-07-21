import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework2Component } from './homework2/homework2.component';

@NgModule({
  declarations: [
    AppComponent,
    Homework2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  exports: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
