import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Configuración del idioma de la aplicación
import idiomaColombia from '@angular/common/locales/es-CO';
import idiomaFrancesCanada from '@angular/common/locales/fr-CA';
import {registerLocaleData} from '@angular/common';

//Puedes registrar tantos idiomas como necesites
registerLocaleData(idiomaColombia);
registerLocaleData(idiomaFrancesCanada);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide:LOCALE_ID, useValue:'es-CO' //Establezco el español de colombia como idioma por defecto
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
