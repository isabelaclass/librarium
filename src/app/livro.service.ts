import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './Livro';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  apiUrl = 'http://localhost:5000/livro';
  constructor(private http: HttpClient) { }
  listar(): Observable<Livro[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Livro[]>(url);
  }
  buscar(id: number): Observable<Livro> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Livro>(url);
  }
  cadastrar(livro: Livro): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Livro>(url, livro, httpOptions);
  }
  alterar(livro: Livro): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Livro>(url, livro, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}