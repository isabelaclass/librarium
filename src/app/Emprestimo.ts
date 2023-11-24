import { Funcionario } from "./Funcionario";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Emprestimo {

    id: number = 0;
    usuario: Usuario | undefined;
    livro: Livro | undefined;
    dataEmprestimo = new Date();
    funcionario : Funcionario | undefined;
}
