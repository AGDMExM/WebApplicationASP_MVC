using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using WebApplicationASP_MVC.Models;

namespace WebApplicationASP_MVC
{
    public static class SampleData
    {
        public static void Initialize(GamesContext context)
        {
            if (!context.Games.Any())
            {
                string path = "./listOfGames.json";
                string json = null;
                List<Game> listGames = new List<Game>();
                try
                {
                    using (StreamReader sr = new StreamReader(path))
                    {
                        json = sr.ReadToEnd();
                    }

                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }

                if (json != null)
                {
                    List<string> strList = JsonSerializer.Deserialize<List<string>>(json);

                    foreach (string strGame in strList)
                    {
                        var tmp = JsonSerializer.Deserialize<Game>(strGame);
                        listGames.Add(JsonSerializer.Deserialize<Game>(strGame));
                    }

                }

                context.Games.AddRange(listGames);
                /*context.Games.AddRange(
                    new Game { Name = "Gaaaaame", Score = 8.1f, Platforms = "PC Linux", TypeGame = "arcade" },
                    new Game { Name = "Gaaaaame", Score = 8.0f, Platforms = "Linux", TypeGame = "arcade" },
                    new Game { Name = "Gaaaaame", Score = 8.2f, Platforms = "PC iOS", TypeGame = "arcade" },
                    new Game { Name = "Gaaaaame", Score = 6.1f, Platforms = "PC", TypeGame = "arcade" }
                );*/
                context.SaveChanges();
            }
        }
    }
}
