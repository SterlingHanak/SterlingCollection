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
            List<Game> videoGames = gameDAL.GetAllGames();
            return View("GameCategory", videoGames);
        }

        // GET: VideoGames
        public ActionResult VideoGames(int gameTag)
        {
            Game videoGame = gameDAL.GetGameInfo(gameTag);
            return View("VideoGames", videoGame);
        }


    }
}