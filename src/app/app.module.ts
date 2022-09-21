import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListsComponent } from './components/lists/lists.component';
import { IndexComponent } from './components/index/index.component';
import { CancionComponent } from './components/cancion/cancion.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CancionCardComponent } from './components/cancion-card/cancion-card.component';
import { CrearCancionComponent } from './components/crear-cancion/crear-cancion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearListaComponent } from './components/crear-lista/crear-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListsComponent,
    IndexComponent,
    CancionComponent,
    CancionCardComponent,
    CrearCancionComponent,
    CrearListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
