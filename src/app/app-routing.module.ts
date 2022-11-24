import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsCommponent } from './components/items/items.component';
import { AdditemComponent } from './components/additem/additem.component';

const routes: Routes = [
  {
    path: '', // es el index tradicional
    component: ItemsCommponent
  },
  {
    path: 'add', //cuando toquemos el hiperviculo deberia mostrarme lo del header
    component: AdditemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
