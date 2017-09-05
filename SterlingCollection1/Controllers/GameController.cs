using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SterlingCollection1.Models;
using SterlingCollection1.DAL;

namespace SterlingCollection1.Controllers
{
    public class GameController : Controller
    {

        private IGameDAL gameDAL;

        public GameController(IGameDAL gameDAL)
        {
            this.gameDAL = gameDAL;
        }

        //GET: GameCategory
        public ActionResult GameCategory()
        {
            return View("GameCategory");
        }

        // GET: VideoGames
        public ActionResult VideoGames(string consoleName)
        {
            List<Game> videoGames = gameDAL.GetGamesByConsole(consoleName);
            return View("VideoGames", videoGames);
        }
    }
}