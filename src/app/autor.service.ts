import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from './Autor';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  apiUrl = 'http://localhost:5000/autor';
  constructor(private http: HttpClient) { }
  listar(): Observable<Autor[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Autor[]>(url);
  }
  buscar(id: number): Observable<Autor> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Autor>(url);
  }
  cadastrar(autor: Autor): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Autor>(url, autor, httpOptions);
  }
  alterar(autor: Autor): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Autor>(url, autor, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}