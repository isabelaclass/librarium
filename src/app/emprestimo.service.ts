import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emprestimo } from './Emprestimo';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  apiUrl = 'http://localhost:5000/emprestimo';
  constructor(private http: HttpClient) { }
  listar(): Observable<Emprestimo[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Emprestimo[]>(url);
  }
  buscar(id: number): Observable<Emprestimo> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Emprestimo>(url);
  }
  cadastrar(emprestimo: Emprestimo): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Emprestimo>(url, emprestimo, httpOptions);
  }
  alterar(emprestimo: Emprestimo): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Emprestimo>(url, emprestimo, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}