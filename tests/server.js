import Http from "http";

const PUMP_MODIFIER = 1.1;
const DELETION_MODIFIER = 1;

const EXAMPLE = {
  total_votes: 760,
  entries: [
    {
      entry: {
        id: 9,
        name: "Elden Ring",
        category: {
          id: 1,
          name: "Nejlepší singleplayer hra roku",
          channel: "1053793977586946140",
        },
        user: {
          id: 19,
          snowflake: "111111111111111111",
          user_name: "FrankFrank",
        },
        state: 1,
        message: null,
      },
      votes: 258,
    },
    {
      entry: {
        id: 7,
        name: "God of War Ragnarök",
        category: {
          id: 1,
          name: "Nejlepší singleplayer hra roku",
          channel: "1053793977586946140",
        },
        user: {
          id: 17,
          snowflake: "222222222222222222",
          user_name: "TomTomTom",
        },
        state: 1,
        message: null,
      },
      votes: 208,
    },
  ],
};

const PUMP_VOTES = (count) => {
  for (let i = 0; i < count; i++) {
    const id = Math.floor(Math.random() * EXAMPLE.entries.length);
    EXAMPLE.entries[id].votes = Math.floor(
      EXAMPLE.entries[id].votes * PUMP_MODIFIER
    );
  }

  let total = 0;
  EXAMPLE.entries.forEach((e) => (total += e.votes));
  if (total > 100000000) {
    EXAMPLE.entries.forEach((e) => (e.votes = 10));
  }
};

const CLEAR_EXAMPLE = () => {
  return EXAMPLE.entries.filter(() => Math.random() < DELETION_MODIFIER);
};

setInterval(() => PUMP_VOTES(3), 100);

const requestListener = function (req, res) {
  if (req.url.startsWith("/data")) {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    });
    res.write(JSON.stringify(CLEAR_EXAMPLE()));
    res.end();
  } else {
    res.writeHead(404);
    res.write("not found");
    res.end();
  }
};

const server = Http.createServer(requestListener);
server.listen(8080);

console.log("Mock server started on port 8080");
