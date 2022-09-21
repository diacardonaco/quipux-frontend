import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionComponent } from './components/cancion/cancion.component';
import { CrearCancionComponent } from './components/crear-cancion/crear-cancion.component';
import { CrearListaComponent } from './components/crear-lista/crear-lista.component';
import { IndexComponent } from './components/index/index.component';
import { ListsComponent } from './components/lists/lists.component';

const routes: Routes = [
                        { path: 'index', component: IndexComponent},
                        { path: 'cancion', component: CancionComponent},
                        { path: 'lists', component: ListsComponent}, 
                        { path: 'crear-cancion', component: CrearCancionComponent},
                        { path: 'crear-lista', component: CrearListaComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
