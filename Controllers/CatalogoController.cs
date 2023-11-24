using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class CatalogoController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public CatalogoController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }


        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Catalogo catalogo)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Catalogo is null) return NotFound();
            await _dbContext.AddAsync(catalogo);
            await _dbContext.SaveChangesAsync();
            return Created("",catalogo);
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Catalogo>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Catalogo is null) return NotFound();
            return await _dbContext.Catalogo.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Catalogo>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Catalogo is null) return NotFound();
            var catalogoTemp = await _dbContext.Catalogo.FindAsync(id);
            if(catalogoTemp is null) return NotFound();
            return catalogoTemp;
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Catalogo is null) return NotFound();
            var catalogoTemp = await _dbContext.Catalogo.FindAsync(id);
            if(catalogoTemp is null) return NotFound();
            _dbContext.Remove(catalogoTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        }