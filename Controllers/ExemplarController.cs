using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class ExemplarController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public ExemplarController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }

    
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Exemplar>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Exemplar is null) return NotFound();
            return await _dbContext.Exemplar.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{codigoDeBarras}")]
        public async Task<ActionResult<Exemplar>> Buscar(int codigoDeBarras)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Exemplar is null) return NotFound();
            var exemplarTemp = await _dbContext.Exemplar.FindAsync(codigoDeBarras);
            if(exemplarTemp is null) return NotFound();
            return exemplarTemp;
        }

        }
