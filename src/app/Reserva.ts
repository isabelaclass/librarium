import { Funcionario } from "./Funcionario";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Reserva {
    id: number = 0;
    usuario: Usuario | undefined;
    livro: Livro | undefined;
    dataReserva: Date = new Date();
    funcionario: Funcionario | undefined;
}
