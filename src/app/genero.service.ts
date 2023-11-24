import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from './Genero';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  apiUrl = 'http://localhost:5000/genero';
  constructor(private http: HttpClient) { }
  listar(): Observable<Genero[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Genero[]>(url);
  }
  buscar(id: number): Observable<Genero> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Genero>(url);
  }
  cadastrar(genero: Genero): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Genero>(url, genero, httpOptions);
  }
  
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}