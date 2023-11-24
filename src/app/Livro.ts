import { Autor } from "./Autor";
import { Catalogo } from "./Catalogo";
import { Categoria } from "./Categoria";
import { Editora } from "./Editora";
import { Exemplar } from "./Exemplar";
import { Funcionario } from "./Funcionario";
import { Genero } from "./Genero";
import { ISBN } from "./ISBN";

export class Livro {

    id: number = 0;
    titulo: string = '';
    autorId : number = 0;
    autor: Autor | undefined;
    editoraId : number = 0;
    editora: Editora | undefined;
    generoId : number = 0;
    genero: Genero | undefined;
    categoriaId : number = 0;
    categoria: Categoria | undefined;
    isbnId : number = 0;
    isbn: ISBN | undefined;
    catalogoId : number = 0;
    catalogo: Catalogo | undefined;
    exemplarId : number = 0;
    exemplar: Exemplar| undefined;
    funcionarioId : number = 0;
    funcionario: Funcionario | undefined;
    paginas: number = 0;
    publicacao: Date = new Date();
}

