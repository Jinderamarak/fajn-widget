import Http from "http";

const gameNames = [
  "Elden Ring",
  "God of War Ragnarök",
  "Halo Infinite",
  "Horizon Forbidden West",
  "Starfield",
  "The Legend of Zelda: Breath of the Wild 2",
  "The Elder Scrolls VI",
  "Final Fantasy XVI",
  "Gran Turismo 7",
  "Forza Horizon 5",
  "Gotham Knights",
  "Minecraft",
  "Deathloop",
  "Far Cry 6",
  "Ratchet & Clank: Rift Apart",
  "Kena: Bridge of Spirits",
  "Psychonauts 2",
  "Resident Evil Village",
  "GhostWire: Tokyo",
  "Back 4 Blood",
  "Dying Light 2",
  "Rainbow Six Quarantine",
  "Vampire: The Masquerade - Bloodlines 2",
  "The Lord of the Rings: Gollum",
  "The Callisto Protocol",
  "Atomic Heart",
  "The Medium",
  "Returnal",
  "Chivalry 2",
  "S.T.A.L.K.E.R. 2",
  "The Ascent",
  "CrossfireX",
  "Scorn",
  "The Outlast Trials",
  "The Stanley Parable: Ultra Deluxe",
  "Tunic",
  "Twelve Minutes",
  "The Gunk",
  "The Good Life",
  "The Artful Escape",
  "The Big Con",
  "The Forgotten City",
  "The Last Night",
  "The Wolf Among Us 2",
  "Trek to Yomi",
  "Tunic",
  "Twelve Minutes",
  "Unexplored 2: The Wayfarer's Legacy",
  "Warhammer 40,000: Darktide",
  "Way to the Woods",
  "The Witch Queen",
  "Senua's Saga: Hellblade II",
  "Fable",
  "Everwild",
  "Avowed",
];

const userNames = [
  "Tom",
  "Frank",
  "John",
  "Peter",
  "Michael",
  "Robert",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Thomas",
  "Charles",
  "Christopher",
  "Daniel",
  "Matthew",
  "Anthony",
  "Donald",
  "Mark",
  "Paul",
  "Steven",
  "Andrew",
  "Kenneth",
  "Joshua",
  "George",
  "Kevin",
  "Brian",
  "Edward",
  "Ronald",
  "Timothy",
  "Jason",
  "Jeffrey",
  "Ryan",
  "Jacob",
  "Gary",
  "Nicholas",
  "Eric",
  "Stephen",
];

const categoryNames = [
  "Best Singleplayer Game",
  "Best Game of the Year",
  "Best Multiplayer Game",
  "Best Indie Game",
  "Best Action Game",
  "Best Adventure Game",
  "Best RPG",
  "Best Shooter",
  "Best Fighting Game",
  "Best Racing Game",
  "Best Sports Game",
  "Best Strategy Game",
  "Best Family Game",
  "Best VR Game",
  "Best Mobile Game",
  "Best Ongoing Game",
  "Best Game Direction",
  "Best Narrative",
  "Best Art Direction",
  "Best Score and Music",
  "Best Audio Design",
  "Best Performance",
  "Games for Impact",
  "Best Community Support",
  "Best Debut Game",
];

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const createUser = () => {
  const id = randomInt(0, userNames.length - 1);
  const name = userNames[id];
  return {
    id,
    snowflake: randomInt(0, 1000000000000000000),
    user_name: name,
  };
};

const createCategory = () => {
  const id = randomInt(0, categoryNames.length - 1);
  const name = categoryNames[id];
  return {
    id,
    name: name,
    channel: randomInt(0, 1000000000000000000),
  };
};

const createEntry = (name, id) => {
  return {
    votes: 0,
    entry: {
      id,
      name,
      category: createCategory(),
      user: createUser(),
      state: 1,
      message: null,
    },
  };
};

const createInitialData = () => {
  const entries = gameNames.map(createEntry);
  return {
    total_votes: 0,
    entries: entries,
  };
};
const addVotes = (data, count) => {
  for (let i = 0; i < count; i++) {
    const id = randomInt(0, data.entries.length);
    const diff = id + 1;
    data.entries[id].votes += diff;
    data.total_votes += diff;
  }
};

const db = createInitialData();
setInterval(() => addVotes(db, 1), 1);

const requestListener = function (req, res) {
  const options = {
    category: null,
    limit: null,
  };

  const parts = req.url.substr(1).split("/");
  if (parts.length > 0) {
    options.category = parts[0];
  }
  if (parts.length > 1) {
    options.limit = parseInt(parts[1]);
  }

  const entries = db.entries
    .map((x) => x)
    .sort((a, b) => b.votes - a.votes)
    .filter(
      (x) =>
        options.category === null ||
        options.category === "current" ||
        x.entry.category.id == options.category
    )
    .slice(0, options.limit ?? db.entries.length);

  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  });
  res.write(
    JSON.stringify({
      total_votes: db.total_votes,
      entries,
    })
  );
  res.end();
};

const server = Http.createServer(requestListener);
server.listen(8080);

console.log("Mock server started on port 8080");
