﻿const gamelist = [
    "007: The World Is Not Enough",
    "1080° Snowboarding",
    "Aero Fighters Assault",
    "Alien: Isolation",
    "All-Star Baseball 2001",
    "Animaniacs",
    "Army Men: Air Combat",
    "Army Men: Sarge's Heroes",
    "Assassin's Creed II",
    "Assassin's Creed III",
    "Assassin's Creed IV: Black Flag",
    "Assassin's Creed Syndicate",
    "Assassin's Creed Unity",
    "Assassin's Creed: Brotherhood",
    "Assassin's Creed: Revelations",
    "Back to the Future",
    "Backyard Wrestling: Don't Try This at Home",
    "Banjo-Kazooie",
    "Barbarian",
    "Batman: Arkham Asylum",
    "Batman: Arkham City",
    "Batman: Arkham Knight",
    "Batman: The Video Game",
    "Bayonetta",
    "Bayonetta 2",
    "Big Mutha Truckers",
    "Billy Hatcher and the Giant Egg",
    "Bio F.R.E.A.K.S.",
    "Black Stone: Magic & Steel",
    "Blast Corps",
    "Blood Omen 2",
    "Bomberman 64",
    "Bomberman Hero",
    "Borderlands",
    "Borderlands: The Pre-Sequel!",
    "Brute Force",
    "Buck Bumble",
    "Bulletstorm Epic Edition",
    "Burnout 3: Takedown",
    "Cars",
    "Castlevania: Lords of Shadow",
    "Chrono Cross",
    "Chrono Trigger",
    "Circus Maximus: Chariot Wars",
    "ClayFighter",
    "Colony Wars III: Red Sun",
    "Conker: Live & Reloaded",
    "Counter-Strike",
    "Crimson Skies: High Road to Revenge",
    "Cruis'n World",
    "Dante's Inferno",
    "Dark Rift",
    "Dark Souls",
    "Darksiders",
    "Dead Or Alive 3",
    "Dead Or Alive Ultimate",
    "Dead Or Alive Ultimate 2",
    "Dead Or Alive Xtreme Beach Volleyball",
    "Dead Space 3 Limited Edition",
    "Deadpool",
    "Def Jam Vendetta",
    "Destiny",
    "Destiny 2",
    "Destroy All Humans!",
    "Deus Ex: Human Revolution",
    "Deus Ex: Mankind Divided",
    "Deus Ex: The Conspiracy",
    "Diablo III: Ultimate Evil Edition",
    "Diddy Kong Racing",
    "Dishonored",
    "Dishonored 2",
    "Disney Epic Mickey: Power of Illusion",
    "Disney Infinity",
    "Disney's Goof Troop",
    "Disney's PK: Out of the Shadows",
    "DmC: Devil May Cry",
    "Donkey Kong 64",
    "Donkey Kong Country",
    "Donkey Kong Country: Tropical Freeze",
    "Doom",
    "Doom 3",
    "Dr. Robotnik's Mean Bean Machine",
    "Dragon Age: Inquisition",
    "Dragon Ball Z: Battle of Z",
    "Dragon Ball Z: Ultimate Battle 22",
    "Duke Nukem 64",
    "Duke Nukem Forever",
    "Dungeons & Dragons: Heroes",
    "Dynasty Warriors: Gundam 3",
    "Enclave",
    "Enemy Territory: Quake Wars",
    "Enter the Matrix",
    "Eternal Champions",
    "Evergrace",
    "Evolve",
    "Excitebike 64",
    "F-1 World Grand Prix",
    "F.E.A.R. 2: Project Origin",
    "F.E.A.R. 3",
    "Fable",
    "Fable III",
    "Fallout 4",
    "Far Cry 3",
    "Far Cry 4",
    "Far Cry Instincts: Evolution",
    "Far Cry Instincts: Predator",
    "Far Cry Primal",
    "FIFA 99",
    "Final Fantasy Crystal Chronicles",
    "Final Fantasy III",
    "Final Fantasy Tactics",
    "Final Fantasy Tactics A2: Grimoire of the Rift",
    "Final Fantasy Tactics Advance",
    "Final Fantasy VII",
    "Final Fantasy X/X-2 HD Remaster",
    "Final Fantasy XII",
    "Final Fantasy XIII-2",
    "Final Fantasy XV",
    "Finding Nemo",
    "FlatOut",
    "Flying Dragon",
    "Forsaken",
    "Fortune Street",
    "Freestyle Metal X",
    "Frogger",
    "Future Tactics: The Uprising",
    "Fuzion Frenzy",
    "Game of Thrones",
    "Gauntlet Legends",
    "Gauntlet: Seven Sorrows",
    "Gears of War",
    "Gears of War 2",
    "Gears of War 3",
    "Gears of War 4",
    "Gears of War: Judgment",
    "Gex 3: Deep Cover Gecko",
    "Glover",
    "Goblin Commander: Unleash the Horde",
    "GodenEye 007",
    "GoldenEye 007: Reloaded",
    "GoldenEye: Rogue Agent",
    "Grand Theft Auto IV",
    "Grand Theft Auto: Episodes From Liberty City",
    "Guitar Hero III: Legends of Rock",
    "Guitar Hero World Tour",
    "Halo 2",
    "Halo 2: Multiplayer Map Pack",
    "Halo 3",
    "Halo 5: Guardians",
    "Halo: Combat Evolved Anniversary",
    "Halo: Reach",
    "Hexen Beyond Heretic",
    "Hunted: The Demon's Forge",
    "Hyrule Warriors",
    "Injustice: Gods Among Us",
    "James Bond 007: Everything or Nothing",
    "James Bond 007: From Russia With Love",
    "Jet Force Gemini",
    "Jet Grind Radio",
    "Jet Set Radio Future",
    "Kameo Elements of Power",
    "Killzone Shadow Fall",
    "Kingdom Hearts HD 1.5 ReMIX",
    "Kirby 64: The Crystal Shards",
    "Kirby's Dream Land 3",
    "Knife Edge: Nose Gunner",
    "Kobe Bryant in NBA Courtside",
    "Kung Fu Chaos",
    "L.A.Noire",
    "Lego Star Wars II: The Original Trilogy",
    "Lego Star Wars: The Video Game",
    "Lost Planet: Extreme Condition",
    "Lupin the 3rd: Treasure of the Sorcerer King",
    "Mace: The Dark Age",
    "Madden NFL 2001",
    "Major League Baseball Featuring Ken Griffey Jr.",
    "Mario Golf: Toadstool Tour",
    "Mario Kart 64",
    "Marvel Nemesis: Rise of the Imperfects",
    "Marvel: Ultimate Alliance",
    "Marvel: Ultimate Alliance 2",
    "Mass Effect Trilogy",
    "Max Payne",
    "Max Payne 2: The Fall of Max Payne",
    "Max Payne 3",
    "MechAssault",
    "MechAssault 2: Lone Wolf",
    "Metal Arms: Glitch in the System",
    "Metal Gear Rising: Revengeance",
    "Metal Gear Solid",
    "Metal Gear Solid 2: Sons of Liberty",
    "Metal Gear Solid 4: Guns of the Patriots",
    "Metal Gear Solid HD Collection",
    "Metal Gear Solid V: Ground Zeroes",
    "Metal Gear Solid V: The Phantom Pain",
    "Metro Redux",
    "Metroid Prime",
    "Metroid Prime 3: Corruption",
    "Mickey's Speedway USA",
    "Middle-Earth: Shadow of Mordor",
    "Midnight Club: Los Angeles Complete Edition",
    "Midway Arcade Treasures",
    "Mission: Impossible",
    "Mortal Kombat",
    "Mortal Kombat 4",
    "Mortal Kombat II",
    "Mortal Kombat Mythologies: Sub-Zero",
    "Mortal Kombat X",
    "Mortal Kombat: Deadly Alliance",
    "Ms. Pac-Man Maze Madness",
    "Namco Museum",
    "Naruto: Uzumaki Chronicles",
    "NBA Live 99",
    "NFL Blitz 2000",
    "NHL 99",
    "Nights: Journey of Dreams",
    "Ninja Gaiden",
    "Ninja Gaiden",
    "Ninja Gaiden Sigma 2",
    "Nioh",
    "Oddworld: Munch's Oddysee",
    "Odin Sphere",
    "Off Road Challenge",
    "Okami",
    "One Piece: Pirates' Carnival",
    "One Piece: Unlimited Adventure",
    "Outlaw Golf",
    "Outlaw Golf 2",
    "Outlaw Golf: 9 Holes of X-Mas",
    "Outlaw Golf: 9 More Holes of X-Mas",
    "Pac-Man 2: The New Adventures",
    "Paper Mario: Sticker Star",
    "Paper Mario: The Thousand-Year Door",
    "Pariah",
    "Perfect Dark",
    "Perfect Dark Zero",
    "Phantasy Star Online Episode I & II",
    "Pikmin 3",
    "Pilotwings 64",
    "Pirates of the Caribbean: At World's End",
    "Pirates: Legend of the Black Buccaneer",
    "PocketBike Racer",
    "Pokemon Snap",
    "Pokémon Stadium",
    "Pride FC: Fighting Championships",
    "Prince of Persia: The Sands of Time",
    "Professor Layton and the Miracle Mask",
    "Quake",
    "Quake 4",
    "Quake II",
    "Radiant Historia",
    "Radical Psycho Machine Racing",
    "Rampage: Total Destruction",
    "Rayman Legends",
    "Raze's Hell",
    "Ready 2 Rumble Boxing",
    "Record of Agarest War Zero",
    "Red Dead Redemption",
    "Red Dead Redemption",
    "Red Faction: Armageddon",
    "Rugrats: Scavenger Hunt",
    "S.C.A.R.S.",
    "Sega GT 2002",
    "Shadow Man",
    "Shadowrun",
    "Shovel Knight",
    "Skylanders: Swap Force",
    "Sleeping Dogs: Definitive Edition",
    "Sly Cooper: Thieves in Time",
    "Sly Cooper: Thieves in Time",
    "Sniper Elite V2 Silver Star Edition",
    "Sonic Adventure",
    "Sonic Lost World",
    "Sonic Mega Collection",
    "Sonic the Hedgehog 2",
    "Soul Calibur II",
    "Soul Calibur IV",
    "South Park",
    "South Park: Chef's Luv Shack",
    "Spawn: Armageddon",
    "Spec Ops: The Line",
    "Spider-Man 2",
    "Spider-Man and Venom: Maximum Carnage",
    "Star Fox",
    "Star Fox 64",
    "Star Wars Episode I: Racer",
    "Star Wars: Shadows of the Empire",
    "Star Wars: The Force Unleashed II",
    "StarCraft 64",
    "Sunset Overdrive",
    "Super Mario 64",
    "Super Mario Bros. / Duck Hunt / World Class Track Meet",
    "Super Mario Bros. 3",
    "Super Mario Land 2: 6 Golden Coins",
    "Super Mario RPG: Legend of the Seven Stars",
    "Super Mario World 2: Yoshi's Island",
    "Super Princess Peach",
    "Super Smash Bros.",
    "Super Smash Bros. for Wii U",
    "Super Smash Bros. Melee",
    "Sword of Mana",
    "Tales of the Abyss",
    "Tecmo NBA Basketball",
    "Tekken Hybrid",
    "Tenchu: Return From Darkness",
    "The Chronicles of Riddick: Escape From Butcher Bay",
    "The Conduit",
    "The Elder Scrolls III: Morrowind",
    "The Elder Scrolls IV: Oblivion",
    "The Elder Scrolls IV: Shivering Isles",
    "The Elder Scrolls Online: Tamriel Unlimited",
    "The Elder Scrolls V: Skyrim",
    "The Evil Within",
    "The Incredibles: Rise of the Underminer",
    "The Last Guardian",
    "The Legend of Spyro: A New Beginning",
    "The Legend of Zelda",
    "The Legend of Zelda: A Link Between Worlds",
    "The Legend of Zelda: A Link To The Past",
    "The Legend of Zelda: Majora's Mask",
    "The Legend of Zelda: Ocarina of Time",
    "The Legend of Zelda: The Wind Waker",
    "The Legend of Zelda: Twilight Princess",
    "The Lion King",
    "The Lord of the Rings: Aragorn's Quest",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Lord of the Rings: The Two Towers",
    "The Nightmare of Druaga: Fushigi no Dungeon",
    "The Three Stooges",
    "The Warriors",
    "The Witcher 2: Assassins of Kings Enhanced Edition",
    "The Witcher 3: Wild Hunt",
    "The Witcher 3: Wild Hunt - Blood and Wine",
    "The Witcher 3: Wild Hunt - Hearts of Stone",
    "The Wonderful 101",
    "Tigger's Honey Hunt",
    "Tom Clancy's Ghost Recon",
    "Tom Clancy's Ghost Recon 2",
    "Tom Clancy's Ghost Recon Advanced Warfighter",
    "Tom Clancy's Ghost Recon Advanced Warfighter 2",
    "Tom Clancy's Ghost Recon: Island Thunder",
    "Tom Clancy's Rainbow Six",
    "Tom Clancy's Rainbow Six 3",
    "Tom Clancy's Rainbow Six 3: Black Arrow",
    "Tom Clancy's Rainbow Six: Lockdown",
    "Tom Clancy's Splinter Cell",
    "Tom Clancy's Splinter Cell: Blacklist",
    "Tom Clancy's Splinter Cell: Chaos Theory",
    "Tom Clancy's Splinter Cell: Conviction",
    "Tom Clancy's Splinter Cell: Pandora Tomorrow",
    "Tom Clancy's The Division",
    "Tomb Raider: Definitive Edition",
    "Tonic Trouble",
    "Tony Hawk's American Wasteland",
    "Tony Hawk's Pro Skater",
    "Tony Hawk's Pro Skater 2",
    "Tony Hawk's Pro Skater 2x",
    "Tony Hawk's Pro Skater 4",
    "Tony Hawk's Project 8",
    "Tony Hawk's Underground",
    "Tony Hawk's Underground 2",
    "True Crime: New York City",
    "Turok",
    "Turok 2: Seeds of Evil",
    "Turok: Dinosaur Hunter",
    "Twisted Metal III",
    "UFC 2009 Undisputed",
    "Ultimate Marvel vs. Capcom 3",
    "Unreal Championship",
    "Unreal Championship 2: The Liandri Conflict",
    "Unreal II: The Awakening",
    "Unreal Tournament",
    "Unreal Tournament 3",
    "Until Dawn",
    "Vikings: Wolves of Midgard",
    "War Gods",
    "Warhammer 40,000: Space Marine",
    "Wario Land: Shake It!",
    "Watch Dogs",
    "Wave Race 64",
    "Wayne Gretzky's 3D Hockey",
    "WCW/nWo Revenge",
    "Wolfenstein: The New Order",
    "World Destruction League: Thunder Tanks",
    "World Series Baseball",
    "Worms 3D",
    "Worms Forts: Under Siege",
    "Worms: A Space Oddity",
    "WWE WrestleMania X8",
    "WWF No Mercy",
    "WWF War Zone",
    "WWF WrestleMania 2000",
    "X-Men 2: Clone Wars",
    "X-Men Legends II: Rise of Apocalypse",
    "X-Men: Next Dimension",
    "Xena: Warrior Princess: The Talisman of Fate",
    "Yakuza: Dead Souls",
    "Yoshi's Cookie",
    "Zombies Ate My Neighbors",
    "Zone of the Enders HD Collection"
];

function findMatches(wordToMatch, gamelist) {
    return gamelist.filter(name => {
        const regex = new RegExp(wordToMatch, 'gi');
        return name.match(regex)
    });
}
function displayMatches() {
    const matchArray = findMatches(this.value, gamelist);
    const html = matchArray.map(name => {
        const regex = new RegExp(this.value, 'gi');
        const gameTitle = name.replace(regex, '<span class="hl">' + this.value + '</span>');
        return '<li><span class="name">' + gameTitle + '</span></li>';
}).join('');
suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
