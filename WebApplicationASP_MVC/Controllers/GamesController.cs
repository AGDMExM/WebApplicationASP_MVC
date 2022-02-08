using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationASP_MVC.Models;

namespace WebApplicationASP_MVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        GamesContext db;
        public GamesController(GamesContext context)
        {
            db = context;
        }

        [HttpGet]
        [EnableQuery]
        public ActionResult<List<Game>> GetAllGames()
        {
            return Ok(db.Games);
        }

    }
}
