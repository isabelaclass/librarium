namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
public class Funcionario 
{
     [Key]
      public int Id { get; set; }
      public string? Nome { get; set; }
      public string? Endereco { get; set; }
      public string? Telefone { get; set; }
      public string? Email { get; set; }
      
}
