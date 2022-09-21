import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionComponent } from './components/cancion/cancion.component';
import { IndexComponent } from './components/index/index.component';
import { ListsComponent } from './components/lists/lists.component';

const routes: Routes = [
                        { path: 'index', component: IndexComponent},
                        { path: 'cancion', component: CancionComponent},
                        { path: 'lists', component: ListsComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
