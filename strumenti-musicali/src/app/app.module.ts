import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';
import { SpartitiComponent } from './spartiti/spartiti.component';
import { StrumentiComponent } from './strumenti/strumenti.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BenvenutoComponent,
    SpartitiComponent,
    StrumentiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
