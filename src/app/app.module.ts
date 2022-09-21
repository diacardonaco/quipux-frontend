import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListsComponent } from './components/lists/lists.component';
import { IndexComponent } from './components/index/index.component';
import { CancionComponent } from './components/cancion/cancion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListsComponent,
    IndexComponent,
    CancionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
