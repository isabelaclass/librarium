using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public UsuarioController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Usuario usuario)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Usuario is null) return NotFound();
            await _dbContext.AddAsync(usuario);
            await _dbContext.SaveChangesAsync();
            return Created("",usuario);
        }
        
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Usuario>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Usuario is null) return NotFound();
            return await _dbContext.Usuario.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Usuario>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Usuario is null) return NotFound();
            var usuarioTemp = await _dbContext.Usuario.FindAsync(id);
            if(usuarioTemp is null) return NotFound();
            return usuarioTemp;
        }

       
        [HttpPut]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Usuario usuario){
            
            _dbContext.Usuario.Update(usuario);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Usuario is null) return NotFound();
            var usuarioTemp = await _dbContext.Usuario.FindAsync(id);
            if(usuarioTemp is null) return NotFound();
            _dbContext.Remove(usuarioTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
        }