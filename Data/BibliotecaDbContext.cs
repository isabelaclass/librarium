using Microsoft.EntityFrameworkCore;
namespace Biblioteca.Data;
public class BibliotecaDbContext : DbContext
{
    public DbSet<Usuario> Usuario { get; set; }
    public DbSet<Funcionario> Funcionario { get; set; }
    public DbSet<Livro> Livro {  get; set; }
    public DbSet<Autor> Autor {  get; set; }
    public DbSet<Editora> Editora {  get; set; }
    public DbSet<Genero> Genero {  get; set; }
    public DbSet<ISBN> Isbn {  get; set; }
    public DbSet<Exemplar> Exemplar {  get; set; }
    public DbSet<Categoria> Categoria {  get; set; }
    public DbSet<Catalogo> Catalogo {  get; set; }
    public DbSet<Emprestimo> Emprestimo {  get; set; }
    public DbSet<Reserva> Reserva {  get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("DataSource=Biblioteca.db;Cache=Shared");
    }
}
