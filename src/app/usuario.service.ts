import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './Usuario';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiUrl = 'http://localhost:5000/Usuario';
  constructor(private http: HttpClient) { }
  listar(): Observable<Usuario[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Usuario[]>(url);
  }
  buscar(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Usuario>(url);
  }
  cadastrar(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Usuario>(url, usuario, httpOptions);
  }
  alterar(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Usuario>(url, usuario, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}