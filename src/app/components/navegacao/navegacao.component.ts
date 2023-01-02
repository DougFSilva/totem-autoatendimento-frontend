import { Component } from '@angular/core';
import { faBars, faArrowLeft, faSitemap, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent {
  public faBars = faBars;
  public faArrowLeft = faArrowLeft;
  public faSitemap = faSitemap;
  public faMagnifyingGlass = faMagnifyingGlass;

  public campoBuscar:string = '';
}
