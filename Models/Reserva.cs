namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
using Microsoft.Net.Http.Headers;

public class Reserva
    {
        [Key]
        public int Id { get; set; }
        public int UsuarioId {get; set; }
        public Usuario? Usuario {get; set; }
        public int LivroId {get; set; }
        public Livro? Livro { get; set; }
        public DateTime DataReserva { get; set; }
        public int FuncionarioId {get; set; }
        public Funcionario? Funcionario { get; set; }
}
