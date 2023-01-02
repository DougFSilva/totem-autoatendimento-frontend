import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriasComponent } from './categorias.component';



@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [CategoriasComponent]
})
export class CategoriasModule { }
