import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogo } from './Catalogo';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  apiUrl = 'http://localhost:5000/catalogo';
  constructor(private http: HttpClient) { }
  listar(): Observable<Catalogo[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Catalogo[]>(url);
  }
  buscar(id: number): Observable<Catalogo> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Catalogo>(url);
  }
  cadastrar(catalogo: Catalogo): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Catalogo>(url, catalogo, httpOptions);
  }
  
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}