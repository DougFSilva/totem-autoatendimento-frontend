import { NavegacaoComponent } from './components/navegacao/navegacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasComponent } from './components/categorias/categorias.component';
import { SubcategoriasComponent } from './components/subcategorias/subcategorias.component';

const routes: Routes = [
  {
    path: '',
    component:NavegacaoComponent,
//    canActivate:[],
    children: [
      {
        path: 'categorias',
        component: CategoriasComponent
      },
      {
        path: 'subcategorias',
        component: SubcategoriasComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
