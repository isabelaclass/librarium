namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
using Microsoft.Net.Http.Headers;

public class Reserva
    {
        [Key]
        public int Id { get; set; }
        public Usuario? Usuario {get; set; }
        public Livro? Livro { get; set; }
        public DateOnly DataReserva { get; set; }
        public Funcionario? Funcionario { get; set; }
}
