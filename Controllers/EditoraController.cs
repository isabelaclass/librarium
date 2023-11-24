using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class EditoraController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public EditoraController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }


        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Editora editora)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Editora is null) return NotFound();
            await _dbContext.AddAsync(editora);
            await _dbContext.SaveChangesAsync();
            return Created("",editora);
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Editora>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Editora is null) return NotFound();
            return await _dbContext.Editora.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Editora>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Editora is null) return NotFound();
            var editoraTemp = await _dbContext.Editora.FindAsync(id);
            if(editoraTemp is null) return NotFound();
            return editoraTemp;
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Editora is null) return NotFound();
            var editoraTemp = await _dbContext.Editora.FindAsync(id);
            if(editoraTemp is null) return NotFound();
            _dbContext.Remove(editoraTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        }