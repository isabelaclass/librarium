import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Exemplar } from 'src/app/Exemplar';
import { Observer } from 'rxjs';
import { ExemplarService } from 'src/app/exemplar.service';

@Component({
  selector: 'app-exemplar',
  templateUrl: './exemplar.component.html',
  styleUrls: ['./exemplar.component.css']
})
export class ExemplarComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private exemplarService : ExemplarService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Novo Exemplar'
      this.formulario = new FormGroup({
        id: new FormControl(null)
      });
  }

  enviarFormulario(): void {
    const exemplar: Exemplar = this.formulario.value ;
    const observer: Observer<Exemplar> = {
      next(_result): void {
        alert('Exemplar salva com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    this.exemplarService.cadastrar(exemplar).subscribe(observer);
}
}