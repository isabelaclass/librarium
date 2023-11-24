import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { UsuarioService } from './usuario.service'
import { UsuarioComponent } from './components/usuario/usuario.component';

import { FuncionarioService } from './funcionario.service'
import { FuncionarioComponent } from './components/funcionario/funcionario.component';

import { AutorService } from './autor.service'
import { AutorComponent } from './components/autor/autor.component';

import { LivroService } from './livro.service'
import { LivroComponent } from './components/livro/livro.component';

import { CatalogoService } from './catalogo.service'
import { CatalogoComponent } from './components/catalogo/catalogo.component';

import { CategoriaService } from './categoria.service'
import { CategoriaComponent } from './components/categoria/categoria.component';

import { EditoraService } from './editora.service'
import { EditoraComponent } from './components/editora/editora.component';

import { GeneroService } from './genero.service'
import { GeneroComponent } from './components/genero/genero.component';

import { ExemplarService } from './exemplar.service'
import { ExemplarComponent } from './components/exemplar/exemplar.component';

import { IsbnService } from './isbn.service'
import { IsbnComponent } from './components/isbn/isbn.component';

import { ReservaService } from './reserva.service'
import { ReservaComponent } from './components/reserva/reserva.component';

import { EmprestimoService } from './emprestimo.service'
import { EmprestimoComponent } from './components/emprestimo/emprestimo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    FuncionarioComponent,
    AutorComponent,
    LivroComponent,
    CatalogoComponent,
    CategoriaComponent, 
    EditoraComponent,
    GeneroComponent,
    ExemplarComponent,
    IsbnComponent,
    ReservaComponent,
    EmprestimoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    HttpClientModule,
    ReactiveFormsModule, 
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule, 
              UsuarioService, 
              FuncionarioService,
               AutorService, 
               LivroService, 
               CatalogoService, 
               CategoriaService, 
               EditoraService, 
               GeneroService, 
               ExemplarService, 
               IsbnService, 
               ReservaService, 
               EmprestimoService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

