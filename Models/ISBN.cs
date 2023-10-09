namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
public class ISBN
{
    [Key]
    public int Isbn { get; set; }
}