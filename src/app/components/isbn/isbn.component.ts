import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ISBN } from 'src/app/ISBN';
import { Observer } from 'rxjs';
import { IsbnService } from 'src/app/isbn.service';

@Component({
  selector: 'app-isbn',
  templateUrl: './isbn.component.html',
  styleUrls: ['./isbn.component.css']
})
export class IsbnComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private isbnService : IsbnService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Novo ISBN'
      this.formulario = new FormGroup({
        id: new FormControl(null)
      });
  }

  enviarFormulario(): void {
    const isbn: ISBN = this.formulario.value ;
    const observer: Observer<ISBN> = {
      next(_result): void {
        alert('ISBN salva com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    this.isbnService.cadastrar(isbn).subscribe(observer);
}
}