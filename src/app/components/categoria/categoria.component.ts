import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/Categoria';
import { Observer } from 'rxjs';
import { CategoriaService } from 'src/app/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Nova Categoria'
      this.formulario = new FormGroup({
        id: new FormControl(null),
        descricao: new FormControl(null)
      });
  }

  enviarFormulario(): void {
    const categoria: Categoria = this.formulario.value ;
    const observer: Observer<Categoria> = {
      next(_result): void {
        alert('Categoria salva com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    this.categoriaService.cadastrar(categoria).subscribe(observer);
}
}