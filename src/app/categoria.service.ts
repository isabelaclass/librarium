import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl = 'http://localhost:5000/categoria';
  constructor(private http: HttpClient) { }
  listar(): Observable<Categoria[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Categoria[]>(url);
  }
  buscar(id: number): Observable<Categoria> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Categoria>(url);
  }
  cadastrar(categoria: Categoria): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Categoria>(url, categoria, httpOptions);
  }
  
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}