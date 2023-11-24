import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { Livro } from 'src/app/Livro';
import { LivroService } from 'src/app/livro.service';
import { Autor } from 'src/app/Autor';
import { AutorService } from 'src/app/autor.service';
import { Editora } from 'src/app/Editora';
import { EditoraService } from 'src/app/editora.service';
import { Genero } from 'src/app/Genero';
import { GeneroService } from 'src/app/genero.service';
import { Categoria } from 'src/app/Categoria';
import { CategoriaService } from 'src/app/categoria.service';
import { ISBN } from 'src/app/ISBN';
import { IsbnService } from 'src/app/isbn.service';
import { Catalogo } from 'src/app/Catalogo';
import { CatalogoService } from 'src/app/catalogo.service';
import { Exemplar } from 'src/app/Exemplar';
import { ExemplarService } from 'src/app/exemplar.service';
import { Funcionario } from 'src/app/Funcionario';
import { FuncionarioService } from 'src/app/funcionario.service';


@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})

export class LivroComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  autores: Array<Autor> | undefined;
  editoras: Array<Editora> | undefined;
  generos: Array<Genero> | undefined;
  categorias: Array<Categoria> | undefined;
  isbns: Array<ISBN> | undefined;
  catalogos: Array<Catalogo> | undefined;
  exemplares: Array<Exemplar> | undefined;
  funcionarios: Array<Funcionario> | undefined;


  constructor(private livroService : LivroService,
              private autorService : AutorService,
              private editoraService : EditoraService,
              private generoService : GeneroService,
              private categoriaService : CategoriaService,
              private isbnService : IsbnService,
              private catalogoService : CatalogoService,
              private exemplarService : ExemplarService,
              private funcionarioService : FuncionarioService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Novo Livro';
      this.autorService.listar().subscribe(autores => {
        this.autores = autores;
        if(this.autores && this.autores.length > 0) {
          this.formulario.get('autorId')?.setValue(this.autores[0].id);
        }
      });
      this.editoraService.listar().subscribe(editoras => {
        this.editoras = editoras;
        if(this.editoras && this.editoras.length > 0) {
          this.formulario.get('editoraId')?.setValue(this.editoras[0].id);
        }
      });
      this.generoService.listar().subscribe(generos => {
        this.generos = generos;
        if(this.generos && this.generos.length > 0) {
          this.formulario.get('generoId')?.setValue(this.generos[0].id);
        }
      });
      this.categoriaService.listar().subscribe(categorias => {
        this.categorias = categorias;
        if(this.categorias && this.categorias.length > 0) {
          this.formulario.get('categoriaId')?.setValue(this.categorias[0].id);
        }
      });
      this.isbnService.listar().subscribe(isbns => {
        this.isbns = isbns;
        if(this.isbns && this.isbns.length > 0) {
          this.formulario.get('isbnId')?.setValue(this.isbns[0].id);
        }
      });
      this.catalogoService.listar().subscribe(catalogos => {
        this.catalogos = catalogos;
        if(this.catalogos && this.catalogos.length > 0) {
          this.formulario.get('catalogoId')?.setValue(this.catalogos[0].id);
        }
      });
      this.exemplarService.listar().subscribe(exemplares => {
        this.exemplares = exemplares;
        if(this.exemplares && this.exemplares.length > 0) {
          this.formulario.get('exemplarId')?.setValue(this.exemplares[0].id);
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
        titulo: new FormControl(null),
        autorId: new FormControl(null),
        editoraId: new FormControl(null),
        generoId: new FormControl(null),
        categoriaId: new FormControl(null),
        isbnId: new FormControl(null),
        catalogoId: new FormControl(null),
        exemplarId: new FormControl(null),
        funcionarioId: new FormControl(null),
        paginas: new FormControl(null),
        publicacao: new FormControl(null),
        disponibilidade: new FormControl(null)
  })
}

  enviarFormulario(): void {
    const livro: Livro = this.formulario.value ;
    const observer: Observer<Livro> = {
      next(_result): void {
        alert('Livro salvo com sucesso!');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
      this.livroService.cadastrar(livro).subscribe(observer);

}
}