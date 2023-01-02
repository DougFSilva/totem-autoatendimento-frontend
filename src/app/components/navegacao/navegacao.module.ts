import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

import { FooterComponent } from './footer/footer.component';
import { NavegacaoComponent } from './navegacao.component';

@NgModule({
  declarations: [FooterComponent, NavegacaoComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    FontAwesomeModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
  ],
  exports: [NavegacaoComponent],
})
export class NavegacaoModule {}
