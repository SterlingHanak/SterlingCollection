using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SterlingCollection1.Models;

namespace SterlingCollection1.DAL
{
    public interface IGameDAL
    {
        List<Game> GetAllGames();
        List<Game> GetGamesByConsole(string consoleName);
        Game GetGameInfo(int gameTag);
    }
}
