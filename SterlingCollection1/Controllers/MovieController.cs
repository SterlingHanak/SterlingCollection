using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SterlingCollection1.Models;
using SterlingCollection1.DAL;

namespace SterlingCollection1.Controllers
{
    public class MovieController : Controller
    {
        private IMovieDAL movieDAL;
        public MovieController(IMovieDAL movieDAL)
        {
            this.movieDAL = movieDAL;
        }

        // GET: Movies
        public ActionResult Movies()
        {
            List<Movie> movies = movieDAL.GetAllMovies();
            return View("Movies", movies);
        }

        // GET: Movie
        public ActionResult Film(int movieTag)
        {
            Movie film = movieDAL.GetMovieInfo(movieTag);
            return View("Film", film);
        }
    }
}