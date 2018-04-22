using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using SterlingCollection1.Models;

namespace SterlingCollection1.DAL
{
    public class AlbumSqlDAL : IAlbumDAL
    {
        readonly string connectionString;

        const string SQL_GetAllAlbums = "SELECT * FROM albums ORDER BY artist, album_name;";
        const string SQL_GetAlbumInfo = "SELECT * FROM albums WHERE id = @id";

        public AlbumSqlDAL(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public List<Album> GetAllAlbums()
        {
            List<Album> albums = new List<Album>();

            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand(SQL_GetAllAlbums, conn);
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        albums.Add(PopulateAlbumObject(reader));
                    }
                    return albums;
                }
            }
            catch (SqlException)
            {
                throw;
            }
        }

        public Album GetAlbumInfo(int recordTag)
        {
            Album record = new Album();
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand(SQL_GetAlbumInfo, conn);
                    cmd.Parameters.AddWithValue("@id", recordTag);
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        record = PopulateAlbumObject(reader);
                    }
                }
                return record;
            }
            catch (SqlException)
            {
                throw;
            }
        }

        private Album PopulateAlbumObject(SqlDataReader reader)
        {
            Album album = new Album();
            album.Id = Convert.ToInt32(reader["id"]);
            album.AlbumName = Convert.ToString(reader["album_name"]);
            album.Artist = Convert.ToString(reader["artist"]);
            album.Country = Convert.ToString(reader["country"]);
            album.Label = Convert.ToString(reader["label"]);
            album.Genre = Convert.ToString(reader["genre"]);
            album.ReleaseYear = Convert.ToInt32(reader["release_year"]);
            album.AlbumFormat = Convert.ToString(reader["album_format"]);
            album.FormatDetail = Convert.ToString(reader["format_detail"]);
            album.AlbumArt = Convert.ToString(reader["img_name"]);

            return album;
        }

    }
}