namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
using Microsoft.Net.Http.Headers;

public class Emprestimo
    {
        [Key]
        public int Id { get; set; }
        public Usuario? Usuario {get; set; }
        public Livro? Livro { get; set; }
        public DateOnly DataEmprestimo { get; set; }
        public Funcionario? Funcionario { get; set; }
}
