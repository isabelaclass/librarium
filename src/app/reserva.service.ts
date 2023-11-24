import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from './Reserva';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  apiUrl = 'http://localhost:5000/reserva';
  constructor(private http: HttpClient) { }
  listar(): Observable<Reserva[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Reserva[]>(url);
  }
  buscar(id: number): Observable<Reserva> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Reserva>(url);
  }
  cadastrar(reserva: Reserva): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Reserva>(url, reserva, httpOptions);
  }
  alterar(reserva: Reserva): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Reserva>(url, reserva, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}