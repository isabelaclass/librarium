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


        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Exemplar exemplar)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Exemplar is null) return NotFound();
            await _dbContext.AddAsync(exemplar);
            await _dbContext.SaveChangesAsync();
            return Created("",exemplar);
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
        [Route("buscar/{id}")]
        public async Task<ActionResult<Exemplar>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Exemplar is null) return NotFound();
            var examplarTemp = await _dbContext.Exemplar.FindAsync(id);
            if(examplarTemp is null) return NotFound();
            return examplarTemp;
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Exemplar is null) return NotFound();
            var examplarTemp = await _dbContext.Exemplar.FindAsync(id);
            if(examplarTemp is null) return NotFound();
            _dbContext.Remove(examplarTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        }