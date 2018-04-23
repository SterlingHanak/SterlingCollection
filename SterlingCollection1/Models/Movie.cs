using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SterlingCollection1.Models;

namespace SterlingCollection1.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Format { get; set; }
        public string Genre { get; set; }
        public string Studio { get; set; }
        public int ReleaseYear { get; set; }
        public string CoverArt { get; set; }
    }
}