import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard';
import { CalculadoraModule } from './calculadora';
import { ConversorModule } from './conversor';
import { JogoDaVelhaModule } from './jogo-da-velha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    JogoDaVelhaModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
