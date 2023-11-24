namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
public class Livro 
{
    [Key]
    public int Id { get; set; }
    public string? Titulo { get; set; }
    public int AutorId { get; set; }
    public Autor? Autor { get; set; }
    public int EditoraId { get; set; }
    public Editora? Editora { get; set; }
    public int GeneroId { get; set; }
    public Genero? Genero { get; set; }
    public int CategoriaId { get; set; }
    public Categoria? Categoria { get; set; }
    public int IsbnId { get; set; }
    public ISBN? Isbn { get; set; }
    public int CatalogoId { get; set; }
    public Catalogo? Catalogo { get; set; }
    public int ExemplarId { get; set; }
    public Exemplar? Exemplar { get; set; }
    public int FuncionarioId { get; set; }
    public Funcionario? Funcionario { get; set; }
    public int Paginas {get; set; }
    public DateTime Publicacao { get; set; }
}
