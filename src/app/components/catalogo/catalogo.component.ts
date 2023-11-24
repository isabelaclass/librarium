import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Catalogo } from 'src/app/Catalogo';
import { Observer } from 'rxjs';
import { CatalogoService } from 'src/app/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private catalogoService : CatalogoService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Novo Catálogo'
      this.formulario = new FormGroup({
        id: new FormControl(null),
        descricao: new FormControl(null)
      });
  }

  enviarFormulario(): void {
    const catalogo: Catalogo = this.formulario.value ;
    const observer: Observer<Catalogo> = {
      next(_result): void {
        alert('Catálogo salvo com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    this.catalogoService.cadastrar(catalogo).subscribe(observer);
}
}