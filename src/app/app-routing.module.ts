import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from'./components/usuario/usuario.component';
import { FuncionarioComponent } from './components/funcionario/funcionario.component';
import { AutorComponent } from'./components/autor/autor.component';
import { LivroComponent } from './components/livro/livro.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { EditoraComponent } from './components/editora/editora.component';
import { GeneroComponent } from './components/genero/genero.component';
import { ExemplarComponent } from './components/exemplar/exemplar.component';
import { IsbnComponent } from './components/isbn/isbn.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { EmprestimoComponent } from './components/emprestimo/emprestimo.component';

const routes: Routes = [
  {path: 'usuario', component:UsuarioComponent},
  {path: 'autor', component:AutorComponent},
  {path: 'funcionario', component:FuncionarioComponent},
  {path: 'livro', component:LivroComponent},
  {path: 'catalogo', component:CatalogoComponent},
  {path: 'categoria', component:CategoriaComponent},
  {path: 'editora', component:EditoraComponent},
  {path: 'genero', component:GeneroComponent},
  {path: 'exemplar', component:ExemplarComponent},
  {path: 'isbn', component:IsbnComponent},
  {path: 'reserva', component:ReservaComponent},
  {path: 'emprestimo', component:EmprestimoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
