import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { ISBN } from './ISBN';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class IsbnService {
  apiUrl = 'http://localhost:5000/isbn';
  constructor(private http: HttpClient) { }
  listar(): Observable<ISBN[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<ISBN[]>(url);
  }
  buscar(id: number): Observable<ISBN> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<ISBN>(url);
  }
  cadastrar(isbn: ISBN): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<ISBN>(url, isbn, httpOptions);
  }
  
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}