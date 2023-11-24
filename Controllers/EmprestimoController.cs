using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class EmprestimoController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public EmprestimoController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Emprestimo emprestimo)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Emprestimo is null) return NotFound();
            await _dbContext.AddAsync(emprestimo);
            await _dbContext.SaveChangesAsync();
            return Created("",emprestimo);
        }
        
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Emprestimo>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Emprestimo is null) return NotFound();
            return await _dbContext.Emprestimo.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Emprestimo>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Emprestimo is null) return NotFound();
            var emprestimoTemp = await _dbContext.Emprestimo.FindAsync(id);
            if(emprestimoTemp is null) return NotFound();
            return emprestimoTemp;
        }

       
        [HttpPut]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Emprestimo emprestimo){
            
            _dbContext.Emprestimo.Update(emprestimo);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Emprestimo is null) return NotFound();
            var emprestimoTemp = await _dbContext.Emprestimo.FindAsync(id);
            if(emprestimoTemp is null) return NotFound();
            _dbContext.Remove(emprestimoTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        }
    