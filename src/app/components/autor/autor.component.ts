import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Autor } from 'src/app/Autor';
import { Observer } from 'rxjs';
import { AutorService } from 'src/app/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private autorService : AutorService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Novo Autor'
      this.formulario = new FormGroup({
        id: new FormControl(null),
        nome: new FormControl(null)
      });
  }

  enviarFormulario(): void {
    const autor: Autor = this.formulario.value ;
    const observer: Observer<Autor> = {
      next(_result): void {
        alert('Autor salvo com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    this.autorService.cadastrar(autor).subscribe(observer);
}
}