import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Editora } from 'src/app/Editora';
import { Observer } from 'rxjs';
import { EditoraService } from 'src/app/editora.service';

@Component({
  selector: 'app-editora',
  templateUrl: './editora.component.html',
  styleUrls: ['./editora.component.css']
})
export class EditoraComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private editoraService : EditoraService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Nova Editora'
      this.formulario = new FormGroup({
        id: new FormControl(null),
        nome: new FormControl(null)
      });
  }

  enviarFormulario(): void {
    const editora: Editora = this.formulario.value ;
    const observer: Observer<Editora> = {
      next(_result): void {
        alert('Editora salva com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    this.editoraService.cadastrar(editora).subscribe(observer);
}
}