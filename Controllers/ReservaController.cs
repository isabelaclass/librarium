using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Biblioteca.Data;
using Biblioteca;

namespace Bibioteca;

[ApiController]
[Route("[controller]")]
    public class ReservaController : ControllerBase
    {
        private BibliotecaDbContext? _dbContext;

        public ReservaController(BibliotecaDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Reserva reserva)
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Reserva is null) return NotFound();
            await _dbContext.AddAsync(reserva);
            await _dbContext.SaveChangesAsync();
            return Created("",reserva);
        }
        
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Reserva>>> Listar()
        {
            if (_dbContext is null) return NotFound();
            if (_dbContext.Reserva is null) return NotFound();
            return await _dbContext.Reserva.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Reserva>> Buscar(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Reserva is null) return NotFound();
            var reservaTemp = await _dbContext.Reserva.FindAsync(id);
            if(reservaTemp is null) return NotFound();
            return reservaTemp;
        }

       
        [HttpPut]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Reserva reserva){
            
            _dbContext.Reserva.Update(reserva);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int id)
        {
            if(_dbContext is null) return NotFound();
            if(_dbContext.Reserva is null) return NotFound();
            var reservaTemp = await _dbContext.Reserva.FindAsync(id);
            if(reservaTemp is null) return NotFound();
            _dbContext.Remove(reservaTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
        }
