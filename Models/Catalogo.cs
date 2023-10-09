namespace Biblioteca;
using System.ComponentModel.DataAnnotations;
    public class Catalogo
    {
        [Key]
        public int Id { get; set; }
        public string? Descricao { get; set;}
    }