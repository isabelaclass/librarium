using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class FuncionarioController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public FuncionarioController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Funcionario funcionario)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Funcionario is null) return NotFound();
            await _dbContext.AddAsync(funcionario);
            await _dbContext.SaveChangesAsync();
            return Created("",funcionario);
        }
        
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Funcionario>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Funcionario is null) return NotFound();
            return await _dbContext.Funcionario.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Funcionario>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Funcionario is null) return NotFound();
            var funcionarioTemp = await _dbContext.Funcionario.FindAsync(id);
            if(funcionarioTemp is null) return NotFound();
            return funcionarioTemp;
        }

       
        [HttpPut]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Funcionario funcionario){
            
            _dbContext.Funcionario.Update(funcionario);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Funcionario is null) return NotFound();
            var funcionarioTemp = await _dbContext.Funcionario.FindAsync(id);
            if(funcionarioTemp is null) return NotFound();
            _dbContext.Remove(funcionarioTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
        }
