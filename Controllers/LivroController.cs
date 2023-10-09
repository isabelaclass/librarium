using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class LivroController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public LivroController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Livro livro)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Livro is null) return NotFound();
            await _dbContext.AddAsync(livro);
            await _dbContext.SaveChangesAsync();
            return Created("",livro);
        }
        
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Livro>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Livro is null) return NotFound();
            return await _dbContext.Livro.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Livro>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Livro is null) return NotFound();
            var livroTemp = await _dbContext.Livro.FindAsync(id);
            if(livroTemp is null) return NotFound();
            return livroTemp;
        }

       
        [HttpPut]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Livro livro){
            
            _dbContext.Livro.Update(livro);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Livro is null) return NotFound();
            var livroTemp = await _dbContext.Livro.FindAsync(id);
            if(livroTemp is null) return NotFound();
            _dbContext.Remove(livroTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
        }
