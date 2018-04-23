﻿const movies = [
    "12 Monkeys",
    "13 Hours: The Secret Soldiers of Benghazi",
    "22 Jump Street",
    "30 Minutes or Less",
    "3:10 to Yuma",
    "300",
    "A Million Ways to Die in the West",
    "A Walk Among the Tombstones",
    "Ace Ventura: Pet Detective",
    "Ace Ventura: When Nature Calls",
    "Afro Samurai",
    "Airplane",
    "Alien",
    "Aliens",
    "Alien 3",
    "Alien Resurrection",
    "Alien: Covenant",
    "American History X",
    "American Psycho",
    "American Sniper",
    "Anchorman 2: The Legend Continues",
    "Ant-Man",
    "Assassin's Creed",
    "Atomic Blonde",
    "AVP: Double Feature",
    "Baby Driver",
    "Batman Begins",
    "Batman Forever",
    "Batman: The Dark Knight Returns, Part 1",
    "Batman: The Killing Joke",
    "Batman v Superman: Dawn of Justice",
    "Battle Creek Brawl",
    "Beavis and Butt-Head Do America",
    "Birdman or (The Unexpected Virtue of Ignorance)",
    "Black Mass",
    "Black Sails: Season 1",
    "Blade",
    "Blade 2",
    "Blade: Trinity",
    "Blade: House of Chthon",
    "Blade Runner",
    "Blade Runner 2049",
    "Blades of Glory",
    "Blood Father",
    "Brawl in Cell Block 99",
    "Breaking Bad: Season 1",
    "Breaking Bad: Season 2",
    "Breaking Bad: Season 3",
    "Bridge of Spies",
    "Captain America: Civil War",
    "Captain America: The Winter Soldier",
    "Chappie",
    "CHiPs",
    "City Hunter",
    "Cleanskin",
    "Constantine",
    "Cowboy Bebop: The Complete Series",
    "Creed",
    "Crime Story",
    "Crimson Peak",
    "Daddy's Home",
    "Darkest Hour",
    "Deadpool",
    "Despicable Me",
    "Dickie Roberts: Former Child Star",
    "Django Unchained",
    "Doctor Strange",
    "Don't Breathe",
    "Doom",
    "Dracula Untold",
    "Dragon Ball: Season 1",
    "Dragon Ball: Season 2",
    "Dragon Ball Z: Bardock - The Father of Goku",
    "Dragon Ball Z: Bojack Unbound",
    "Dragon Ball Z: Broly - The Legendary Super Saiyan",
    "Dragon Ball Z: Broly - Second Coming",
    "Dragon Ball Z: Bio Broly",
    "Dragon Ball Z: Dead Zone",
    "Dragon Ball Z: Super Android 13",
    "Dragon Ball Z: The History of Trunks",
    "Dragon Ball Z: The World's Strongest",
    "Dragon Fist",
    "Edge of Tomorrow",
    "Evangelion: 1.0 You Are (Not) Alone",
    "Evangelion: 2.0 You Can (Not) Advance",
    "Ex Machina",
    "Fantastic Beasts and Where to Find Them",
    "Fast and Furious 6",
    "Fate of the Furious",
    "Fighting Tommy Riley",
    "Final Fantasy: The Spirits Within",
    "Final Fantasy VII: Advent Children",
    "Finding Dory",
    "First Blood",
    "Fist Fight",
    "Five Deadly Venoms",
    "Foxcatcher",
    "Funny Games",
    "Furious 7",
    "Fury",
    "Futurama: Season 1",
    "Game of Thrones: Season 1",
    "Game of Thrones: Season 2",
    "Gangs of New York",
    "Get Hard",
    "Get Out",
    "Ghost in the Shell (Anime)",
    "Ghost in the Shell (Live-Action)",
    "Ghost in the Shell: The New Movie",
    "Godzilla (2014)",
    "Gone Girl",
    "Goodfellas",
    "Good Will Hunting",
    "Gran Torino",
    "Guardians of the Galaxy",
    "Guardians of the Galaxy Vol. 2",
    "Hacksaw Ridge",
    "Halo: Nightfall",
    "Hardcore Henry",
    "Hell or High Water",
    "Hercules (2014)",
    "Highlander",
    "Horns",
    "Horrible Bosses 2",
    "Hot Rod",
    "Howl's Moving Castle",
    "Hunt to Kill",
    "I Am Legend",
    "Imperium",
    "In the Heart of the Sea",
    "Jackass: The Movie",
    "Jackass Number 2",
    "Jason Bourne",
    "John Wick",
    "John Wick 2",
    "Jurassic World",
    "Justice League",
    "Justice League Dark",
    "Justice League vs. Teen Titans",
    "Keanu",
    "Killing Gunther",
    "Kindergarten Cop",
    "King Arthur: Legend of the Sword",
    "Kingsglaive: Final Fantasy XV",
    "Kingsman: The Golden Circle",
    "Kite",
    "Kong: Skull Island",
    "Legend",
    "Logan",
    "Logan Lucky",
    "Lords of Dogtown",
    "Lucy",
    "Machete",
    "Mad Max: Fury Road",
    "Maggie",
    "Magnificent Bodyguards",
    "Maleficent",
    "Marvel Knights: The Wolverine Collection",
    "Maximum Conviction",
    "Mechanic: Resurrection",
    "Metal Gear Saga Volume 2",
    "Metalocalypse: Season 1",
    "Metalocalypse: Season 2",
    "Metalocalypse: Season 3",
    "Mike and Dave Need Wedding Dates",
    "Milk",
    "Mission: Impossible - Rogue Nation",
    "Money Monster",
    "Money Talks",
    "Mortal Kombat",
    "Mortal Kombat: Annihilation",
    "Mortal Kombat: Legacy",
    "Murder on the Orient Express",
    "National Lampoon's TV: The Movie",
    "Nightcrawler",
    "Neighbors",
    "Neighbors 2: Sorority Rising",
    "No Country For Old Men",
    "Oblivion",
    "Observe and Report",
    "Ong Bak: Muay Thai Warrior",
    "Ong Bak 2: The Beginning",
    "Ong Bak 3",
    "Pacific Rim",
    "Pathfinder",
    "Pirates of the Caribbean: Curse of the Black Pearl",
    "Pirates of the Caribbean: Dead Man's Chest",
    "Pirates of the Caribbean: At World's End",
    "Pirates of the Caribbean: Dead Men Tell No Tales",
    "Pitch Black",
    "Pokémon 4Ever",
    "Police Story",
    "Police Story 2",
    "Predator",
    "Prometheus",
    "Public Enemies",
    "Return to the 36th Chamber",
    "Riddick",
    "Righteous Kill",
    "Rogue One: A Star Wars Story",
    "Rush Hour",
    "Rush Hour 2",
    "Rush Hour 3",
    "Sausage Party",
    "Semi-Pro",
    "Seven",
    "Seven Psycopaths",
    "Shaolin and Wu Tang",
    "Shaolin and Wu Tang 2 - Wu Tang Invasion",
    "Sicario",
    "Son of Batman",
    "Southpaw",
    "Spectre",
    "Spider-Man",
    "Spider-Man 2",
    "Spider-Man 3",
    "Spider-Man: Homecoming",
    "Split",
    "Spotlight",
    "Star Trek: The Next Generation: Season 3",
    "Star Wars: The Force Awakens",
    "Steins;Gate",
    "Straight Outta Compton",
    "Suicide Squad",
    "Ted 2",
    "Teenage Mutant Ninja Turtles (2014)",
    "Teenage Mutant Ninja Turtles III",
    "Tenacious D in The Pick of Destiny",
    "Terminator 2: Judgment Day",
    "Terminator 3: Rise of the Machines",
    "Terminator Salvation",
    "Terminator Genisys",
    "The 36th Chamber of Shaolin",
    "The Amazing Spider-Man",
    "The Amazing Spider-Man 2",
    "The Big Lebowski",
    "The Boondock Saints II: All Saints Day",
    "The Bourne Identity",
    "The Bourne Supremacy",
    "The Bourne Ultimatum",
    "The Brothers Grimsby",
    "The Dark Knight",
    "The Dark Knight Rises",
    "The Dead Pool",
    "The Departed",
    "The Drop",
    "The Dudesons Movie",
    "The Equalizer",
    "The Expendables",
    "The Expendables 2",
    "The Expendables 3",
    "The Fast and the Furious",
    "The Fast and the Furious: Tokyo Drift",
    "The Foreigner",
    "The Girl With the Dragon Tattoo",
    "The Green Room",
    "The Hangover Part II",
    "The Hateful Eight",
    "The Hitman's Bodyguard",
    "The Hobbit: The Battle of the Five Armies",
    "The Infiltrator",
    "The Last Witch Hunter",
    "The Lego Batman Movie",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Lord of the Rings: The Two Towers",
    "The Lord of the Rings: The Return of the King",
    "The Lords of Salem",
    "The Martian",
    "The Matrix",
    "The Matrix Reloaded",
    "The Matrix Revolutions",
    "The Nice Guys",
    "The Package",
    "The Protector",
    "The Raid: Redemption",
    "The Raid 2",
    "The Revenant",
    "The Rite",
    "The Simpsons Movie",
    "The Simpsons: Season 6",
    "The Shining",
    "The Stranger",
    "The Terminator",
    "The Usual Suspects",
    "The Walking Dead: Season 1",
    "The Walking Dead: Season 2",
    "The Walking Dead: Season 3",
    "The Witch",
    "The Wolf of Wall Street",
    "The Wolverine",
    "Thor: Ragnarok",
    "Three Billboards Outside Ebbing, Missouri",
    "Total Recall (1990)",
    "Toy Story 3",
    "Triple 9",
    "Valerian and the City of a Thousand Planets",
    "Vikings: Season 1",
    "Vikings: Season 2",
    "Vikings: Season 3",
    "Vikings: Season 4 Volume 1",
    "Vikings: Season 4 Volume 2",
    "Viva La Bam: Season 1",
    "Viva La Bam: Season 2",
    "Viva La Bam: Season 3",
    "W.",
    "Walk Hard: The Dewey Cox Story",
    "Warcraft",
    "Watchmen",
    "We Own the Night",
    "Whiplash",
    "Why Him?",
    "Winter's Bone",
    "Wonder Woman",
    "X- 2: X - Men United",
    "X- Men",
    "X-Men: Apocalypse",
    "X- Men: Days of Future Past",
    "X-Men: First Class",
    "X-Men Origins: Wolverine",
    "X-Men: The Last Stand",
    "xXx: Return of Xander Cage",
    "You Don't Mess With the Zohan",
    "Zack and Miri Make a Porno",
    "Zoolander No. 2",
    "Zootopia"
]

function findMatches(wordToMatch, movies) {
    return movies.filter(name => {
        const regex = new RegExp(wordToMatch, 'gi');
        return name.match(regex)
    });
}
function displayMatches() {
    const matchArray = findMatches(this.value, movies);
    const html = matchArray.map(name => {
        const regex = new RegExp(this.value, 'gi');
        const movieTitle = name.replace(regex, '<span class="mhl">' + this.value + '</span>');
        return '<li><span class="name">' + movieTitle + '</span></li>';
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.movie-search');
const suggestions = document.querySelector('.movie-suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);