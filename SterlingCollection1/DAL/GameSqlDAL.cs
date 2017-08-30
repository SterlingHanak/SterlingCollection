﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using SterlingCollection1.Models;

namespace SterlingCollection1.DAL
{
    public class GameSqlDAL : IGameDAL
    {
        readonly string connectionString;

        const string SQL_GetAllGames = "SELECT * FROM games ORDER BY name;";
        const string SQL_GetGamesByConsole = "SELECT * FROM games WHERE console = @console ORDER BY name;";

        public GameSqlDAL(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public List<Game> GetAllGames()
        {
            List<Game> games = new List<Game>();
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand(SQL_GetAllGames, conn);
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        games.Add(PopulateGameObject(reader));
                    }
                }
                return games;
            }
            catch (SqlException)
            {
                throw; 
            }
        }

        private Game PopulateGameObject(SqlDataReader reader)
        {
            Game game = new Game();
            game.Id = Convert.ToInt32(reader["id"]);
            game.Name = Convert.ToString(reader["name"]);
            game.Console = Convert.ToString(reader["console"]);
            game.Publisher = Convert.ToString(reader["publisher"]);
            game.ReleaseYear = Convert.ToInt32(reader["release_year"]);
            game.CoverArt = Convert.ToString(reader["img_name"]);

            return game;
        }
    }
}