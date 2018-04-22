using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SterlingCollection1.Models;
using SterlingCollection1.DAL;

namespace SterlingCollection1.Controllers
{
    public class AlbumController : Controller
    {
        private IAlbumDAL albumDAL;
        public AlbumController(IAlbumDAL albumDAL)
        {
            this.albumDAL = albumDAL;
        }

        // GET: Albums
        public ActionResult VinylRecords()
        {
            List<Album> records = albumDAL.GetAllAlbums();
            return View("VinylRecords", records);
        }

        // GET: Record
        public ActionResult Album(int recordTag)
        {
            Album record = albumDAL.GetAlbumInfo(recordTag);
            return View("Album", record);
        }
    }
}