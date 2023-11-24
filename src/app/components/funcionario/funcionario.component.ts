import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionarioService } from 'src/app/funcionario.service';
import { Funcionario } from 'src/app/Funcionario';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Novo Funcionário'
      this.formulario = new FormGroup({
        id: new FormControl(null),
        nome: new FormControl(null),
        endereco: new FormControl(null),
        telefone: new FormControl(null),
        email: new FormControl(null)
      });
  }

  enviarFormulario(): void {
    const funcionario: Funcionario = this.formulario.value ;
    const observer: Observer<Funcionario> = {
      next(_result): void {
        alert('Funcionário salvo com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    this.funcionarioService.cadastrar(funcionario).subscribe(observer);
}
}