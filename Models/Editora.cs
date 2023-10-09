namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
public class Editora
{
     [Key]
    public int Id { get; set; }
    public string? Nome { get; set; }
}