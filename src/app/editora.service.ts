import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editora } from './Editora';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EditoraService {
  apiUrl = 'http://localhost:5000/editora';
  constructor(private http: HttpClient) { }
  listar(): Observable<Editora[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Editora[]>(url);
  }
  buscar(id: number): Observable<Editora> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Editora>(url);
  }
  cadastrar(editora: Editora): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Editora>(url, editora, httpOptions);
  }
  
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}