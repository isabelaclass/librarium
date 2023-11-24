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


        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(ISBN isbn)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Isbn is null) return NotFound();
            await _dbContext.AddAsync(isbn);
            await _dbContext.SaveChangesAsync();
            return Created("",isbn);
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
        [Route("buscar/{id}")]
        public async Task<ActionResult<ISBN>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Isbn is null) return NotFound();
            var isbnTemp = await _dbContext.Isbn.FindAsync(id);
            if(isbnTemp is null) return NotFound();
            return isbnTemp;
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Isbn is null) return NotFound();
            var isbnTemp = await _dbContext.Isbn.FindAsync(id);
            if(isbnTemp is null) return NotFound();
            _dbContext.Remove(isbnTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        }