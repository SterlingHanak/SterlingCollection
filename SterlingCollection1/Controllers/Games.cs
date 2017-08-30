using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SterlingCollection1.Models;
using SterlingCollection1.DAL;

namespace SterlingCollection1.Controllers
{
    public class Games : Controller
    {

        private IGameDAL gameDAL;
        public Games(IGameDAL gameDAL)
        {
            this.gameDAL = gameDAL;
        }

        // GET: VideoGames
        public ActionResult VideoGames()
        {
            List<Game> videoGames = gameDAL.GetAllGames();
            return View("VideoGames", videoGames);
        }
    }
}