﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationASP_MVC.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Score { get; set; }
        public string Platforms { get; set; }
        public string TypeGame { get; set; }
    }
}
