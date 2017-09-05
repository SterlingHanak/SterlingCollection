using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SterlingCollection1.Models;

namespace SterlingCollection1.Models
{
    public class Album
    {
        public int Id { get; set; }
        public string AlbumName { get; set; }
        public string Artist { get; set; }
        public string Country { get; set; }
        public string Label { get; set; }
        public string Genre { get; set; }
        public int ReleaseYear { get; set; }
        public string AlbumFormat { get; set; }
        public string FormatDetail { get; set; }
        public string AlbumArt { get; set; }
    }
}