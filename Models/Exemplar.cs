namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
public class Exemplar
{
    [Key]
    public int CodigoDeBarras { get; set; }
}