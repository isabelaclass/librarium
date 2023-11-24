using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class CategoriaController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public CategoriaController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }


        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Categoria categoria)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Categoria is null) return NotFound();
            await _dbContext.AddAsync(categoria);
            await _dbContext.SaveChangesAsync();
            return Created("",categoria);
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Categoria>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Categoria is null) return NotFound();
            return await _dbContext.Categoria.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Categoria>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Categoria is null) return NotFound();
            var categoriaTemp = await _dbContext.Categoria.FindAsync(id);
            if(categoriaTemp is null) return NotFound();
            return categoriaTemp;
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Categoria is null) return NotFound();
            var categoriaTemp = await _dbContext.Categoria.FindAsync(id);
            if(categoriaTemp is null) return NotFound();
            _dbContext.Remove(categoriaTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        }