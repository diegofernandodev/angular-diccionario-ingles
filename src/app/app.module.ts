import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementoListaComponent } from './elemento-lista/elemento-lista.component';
import { MenuInglesComponent } from './menu-ingles/menu-ingles.component';
import { DiccionarioService } from './diccionario.service';

@NgModule({
  declarations: [
    AppComponent,
    ElementoListaComponent,
    MenuInglesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Agrega HttpClientModule aquí
  ],
  providers: [DiccionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
