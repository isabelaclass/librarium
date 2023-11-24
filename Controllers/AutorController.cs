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


        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Autor autor)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Autor is null) return NotFound();
            await _dbContext.AddAsync(autor);
            await _dbContext.SaveChangesAsync();
            return Created("",autor);
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

        [HttpPut]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Autor autor){
            
            _dbContext.Autor.Update(autor);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Autor is null) return NotFound();
            var autorTemp = await _dbContext.Autor.FindAsync(id);
            if(autorTemp is null) return NotFound();
            _dbContext.Remove(autorTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        }
