import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Genero } from 'src/app/Genero';
import { Observer } from 'rxjs';
import { GeneroService } from 'src/app/genero.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private generoService : GeneroService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Novo Gênero'
      this.formulario = new FormGroup({
        id: new FormControl(null),
        nome: new FormControl(null)
      });
  }

  enviarFormulario(): void {
    const genero: Genero = this.formulario.value ;
    const observer: Observer<Genero> = {
      next(_result): void {
        alert('Gênero salvo com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    this.generoService.cadastrar(genero).subscribe(observer);
}
}