import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private baseUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public buscarTodasCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.baseUrl}/mercadoria/categoria`)
  }
}
