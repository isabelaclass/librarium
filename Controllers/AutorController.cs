using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class AutorController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public AutorController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }

    
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Autor>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Autor is null) return NotFound();
            return await _dbContext.Autor.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Autor>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Autor is null) return NotFound();
            var autorTemp = await _dbContext.Autor.FindAsync(id);
            if(autorTemp is null) return NotFound();
            return autorTemp;
        }

        }
