using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class IsbnController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public IsbnController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }

    
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<ISBN>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Isbn is null) return NotFound();
            return await _dbContext.Isbn.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{Isbn}")]
        public async Task<ActionResult<ISBN>> Buscar(int Isbn)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Isbn is null) return NotFound();
            var isbnTemp = await _dbContext.Isbn.FindAsync(Isbn);
            if(isbnTemp is null) return NotFound();
            return isbnTemp;
        }

        }
