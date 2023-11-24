import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from 'src/app/Usuario';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Novo Usuário'
      this.formulario = new FormGroup({
        id: new FormControl(null),
        nome: new FormControl(null),
        endereco: new FormControl(null),
        telefone: new FormControl(null),
        email: new FormControl(null)
      });
  }

  enviarFormulario(): void {
    const usuario: Usuario = this.formulario.value ;
    const observer: Observer<Usuario> = {
      next(_result): void {
        alert('Usuário salvo com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    this.usuarioService.cadastrar(usuario).subscribe(observer);
}
}