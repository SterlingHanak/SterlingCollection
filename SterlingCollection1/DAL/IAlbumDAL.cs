using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SterlingCollection1.Models;

namespace SterlingCollection1.DAL
{
    public interface IAlbumDAL
    {
        List<Album> GetAllAlbums();
        Album GetAlbumInfo(int recordTag);
    }
}