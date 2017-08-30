using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SterlingCollection1.Models;

namespace SterlingCollection1.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Console { get; set; }
        public string Publisher { get; set; }
        public int ReleaseYear { get; set; }
        public string CoverArt { get; set; }
    }
}