namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
public class Livro 
{
    [Key]
    public int Id { get; set; }
    public string? Titulo { get; set; }
    public Autor? Autor { get; set; }
    public Editora? Editora { get; set; }
    public Genero? Genero { get; set; }
    public Categoria? Categoria { get; set; }
    public ISBN? ISBN { get; set; }
    public Catalogo? Catalogo { get; set; }
    public Exemplar? Exemplar { get; set; }
    public Funcionario? funcionario { get; set; }
    public int Paginas {get; set; }
    public DateOnly Publicacao { get; set; }
    public Boolean Disponibilidade { get; set; }
}
