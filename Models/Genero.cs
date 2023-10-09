namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
public class Genero
{
    [Key]
    public int Id { get; set; }
    public string? Nome { get; set; }
}