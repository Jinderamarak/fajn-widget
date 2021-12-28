import Http from 'http';


const EXAMPLE = [
    { "gameId": 1, "gameName": "Minecraft", "platform": "PC", "submitter": "fajnyCreeper", "category": "GOTY", "votes": 10 },
    { "gameId": 2, "gameName": "PUBG", "platform": "Playstation", "submitter": "fillipp_", "category": "GOTY", "votes": 8 },
    { "gameId": 3, "gameName": "Csko", "platform": "Xbox", "submitter": "KoriTRB", "category": "GOTY", "votes": 16 },
    { "gameId": 4, "gameName": "Raketa", "platform": "PC", "submitter": "Zwejra", "category": "GOTY", "votes": 7 },
    { "gameId": 5, "gameName": "Dynamit", "platform": "PC", "submitter": "BaBca_", "category": "GOTY", "votes": 25 }
]

const PUMP_VOTES = (count) => {
    for (let i = 0; i < count; i++) {
        const id = Math.floor(Math.random() * EXAMPLE.length);
        EXAMPLE[id].votes = Math.floor(EXAMPLE[id].votes * 1.2)
    }

    let total = 0
    EXAMPLE.forEach(e => total += e.votes);
    if (total > 100000000) {
        EXAMPLE.forEach(e => e.votes = 10);
    }
}

setInterval(() => PUMP_VOTES(3), 100)

const requestListener = function (req, res) {
    res.writeHead(200);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.writeHead(200, {"Access-Control-Allow-Origin": "*"});
    res.write(JSON.stringify(EXAMPLE));
    res.end()
}

const server = Http.createServer(requestListener);
server.listen(8080);