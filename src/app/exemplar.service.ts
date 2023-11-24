import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exemplar } from './Exemplar';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExemplarService {
  apiUrl = 'http://localhost:5000/exemplar';
  constructor(private http: HttpClient) { }
  listar(): Observable<Exemplar[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Exemplar[]>(url);
  }
  buscar(id: number): Observable<Exemplar> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Exemplar>(url);
  }
  cadastrar(exemplar: Exemplar): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Exemplar>(url, exemplar, httpOptions);
  }
  
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}