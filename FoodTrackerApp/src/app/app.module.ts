import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OverzichtComponent } from './overzicht/overzicht.component';
import { ProductenComponent } from './producten/producten.component';
import { MaaltijdenComponent } from './maaltijden/maaltijden.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverzichtComponent,
    ProductenComponent,
    MaaltijdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
