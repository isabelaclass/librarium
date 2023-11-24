import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { Livro } from 'src/app/Livro';
import { LivroService } from 'src/app/livro.service';
import { Funcionario } from 'src/app/Funcionario';
import { FuncionarioService } from 'src/app/funcionario.service';
import { Usuario } from 'src/app/Usuario';
import { UsuarioService } from 'src/app/usuario.service';
import { Reserva } from 'src/app/Reserva';
import { ReservaService } from 'src/app/reserva.service';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})

export class ReservaComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  livros: Array<Livro> | undefined;
  usuarios: Array<Usuario> | undefined;
  funcionarios: Array<Funcionario> | undefined;


  constructor(private reservaService : ReservaService,
              private livroService : LivroService,
              private usuarioService : UsuarioService,
              private funcionarioService : FuncionarioService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Nova Reserva';
      this.livroService.listar().subscribe(livros => {
        this.livros = livros;
        if(this.livros && this.livros.length > 0) {
          this.formulario.get('livroId')?.setValue(this.livros[0].id);
        }
      });
      this.usuarioService.listar().subscribe(usuarios => {
        this.usuarios = usuarios;
        if(this.usuarios && this.usuarios.length > 0) {
          this.formulario.get('usuarioId')?.setValue(this.usuarios[0].id);
        }
      });
      this.funcionarioService.listar().subscribe(funcionarios => {
        this.funcionarios = funcionarios;
        if(this.funcionarios && this.funcionarios.length > 0) {
          this.formulario.get('funcionarioId')?.setValue(this.funcionarios[0].id);
        }
      });
      
      this.formulario = new FormGroup({
        id: new FormControl(null),
        usuarioId: new FormControl(null),
        livroId: new FormControl(null),
        dataReserva: new FormControl(null),
        funcionarioId: new FormControl(null)
  })
}

  enviarFormulario(): void {
    const reserva: Reserva = this.formulario.value ;
    const observer: Observer<Reserva> = {
      next(_result): void {
        alert('Reserva salvo com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
      this.reservaService.cadastrar(reserva).subscribe(observer);

}
}