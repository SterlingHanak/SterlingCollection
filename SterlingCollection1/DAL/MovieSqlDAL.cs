using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using SterlingCollection1.Models;

namespace SterlingCollection1.DAL
{
    public class MovieSqlDAL : IMovieDAL
    {
        readonly string connectionString;

        const string SQL_GetAllMovies = "SELECT * FROM movies ORDER BY title;";
        const string SQL_GetMovieInfo = "SELECT * FROM movies WHERE id = @id";

        public MovieSqlDAL(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public List<Movie> GetAllMovies()
        {
            List<Movie> movies = new List<Movie>();
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand(SQL_GetAllMovies, conn);
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        movies.Add(PopulateMovieObject(reader));
                    }
                }
                return movies;
            }
            catch (SqlException)
            {
                throw;
            }
        }

        public Movie GetMovieInfo(int movieTag)
        {
            Movie movie = new Movie();
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand(SQL_GetMovieInfo, conn);
                    cmd.Parameters.AddWithValue("@id", movieTag);
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        movie = PopulateMovieObject(reader);
                    }
                }
                return movie;
            }
            catch (SqlException)
            {
                throw;
            }
        }

        private Movie PopulateMovieObject(SqlDataReader reader)
        {
            Movie movie = new Movie();
            movie.Id = Convert.ToInt32(reader["id"]);
            movie.Name = Convert.ToString(reader["title"]);
            movie.Studio = Convert.ToString(reader["starring"]);
            movie.Genre = Convert.ToString(reader["format_detail"]);
            movie.ReleaseYear = Convert.ToInt32(reader["release_year"]);
            movie.Format = Convert.ToString(reader["movie_format"]);
            movie.CoverArt = Convert.ToString(reader["img_name"]);

            return movie;
        }
    }
}