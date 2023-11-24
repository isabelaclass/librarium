namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
using Microsoft.Net.Http.Headers;

public class Emprestimo
    {
        [Key]
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public Usuario? Usuario {get; set; }
        public int LivroId { get; set; }
        public Livro? Livro { get; set; }
        public DateTime DataEmprestimo { get; set; }
        public int FuncionarioId { get; set; }
        public Funcionario? Funcionario { get; set; }
}
