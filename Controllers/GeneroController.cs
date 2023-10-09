using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class GeneroController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public GeneroController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }

    
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Genero>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Genero is null) return NotFound();
            return await _dbContext.Genero.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Genero>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Genero is null) return NotFound();
            var generoTemp = await _dbContext.Genero.FindAsync(id);
            if(generoTemp is null) return NotFound();
            return generoTemp;
        }

        }
