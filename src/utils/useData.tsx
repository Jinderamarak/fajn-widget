import { useEffect, useState } from "react";
import AppConfig from "./AppConfig";

const EXAMPLE_TOTAL = () =>
  EXAMPLE_VOTES.reduce((acc, e) => acc + e.votes, 0) +
  Math.floor(Math.random() * 100);

const EXAMPLE_VOTES: GameEntry[] = [
  {
    sortIndex: 0,
    gameId: 1,
    gameName: "Minecraft",
    platform: "PC",
    submitter: "fajnyCreeper",
    category: "GOTY",
    votes: 10,
  },
  {
    sortIndex: 0,
    gameId: 2,
    gameName: "PUBG",
    platform: "Playstation",
    submitter: "fillipp_",
    category: "GOTY",
    votes: 8,
  },
  {
    sortIndex: 0,
    gameId: 3,
    gameName: "Csko",
    platform: "Xbox",
    submitter: "KoriTRB",
    category: "GOTY",
    votes: 16,
  },
  {
    sortIndex: 0,
    gameId: 4,
    gameName: "Raketa",
    platform: "PC",
    submitter: "Zwejra",
    category: "GOTY",
    votes: 3,
  },
  {
    sortIndex: 0,
    gameId: 5,
    gameName: "Dynamit",
    platform: "PC",
    submitter: "BaBca_",
    category: "GOTY",
    votes: 25,
  },
];

const PUMP_VOTES = (count: number) => {
  for (let i = 0; i < count; i++) {
    const id = Math.floor(Math.random() * EXAMPLE_VOTES.length);
    EXAMPLE_VOTES[id].votes = Math.floor(EXAMPLE_VOTES[id].votes * 1.5);
  }
};

const fetchVotes = async (): Promise<GameEntry[]> => {
  if (AppConfig.GetString("environment") === "widget") {
    const raw = await fetch(AppConfig.GetString("votesSource"));
    const res = await raw.json();
    return res.map((entry: GameEntry) => ({ ...entry, sortIndex: 0 }));
  } else if (AppConfig.GetString("environment") === "dimensions") {
    const entries: GameEntry[] = [];
    for (let i = 0; i < AppConfig.GetNumber("testRows"); i++) {
      entries.push({
        sortIndex: 0,
        gameId: i + 1,
        gameName: `Hra ${i + 1}`,
        platform: "PC",
        submitter: "WideHardo",
        category: "COZY",
        votes: i * 10,
      });
    }
    return entries;
  } else {
    PUMP_VOTES(Math.ceil((5 * AppConfig.GetNumber("pullInterval")) / 1000));
    return EXAMPLE_VOTES;
  }
};

const fetchTotal = async (): Promise<number> => {
  if (AppConfig.GetString("environment") === "widget") {
    const raw = await fetch(AppConfig.GetString("totalSource"));
    const res = await raw.json();
    return res.totalVotes;
  } else {
    return EXAMPLE_TOTAL();
  }
};

export type GameEntry = {
  gameId: number;
  gameName: string;
  platform: string;
  submitter: string;
  category: string;
  votes: number;
  sortIndex: number;
};

function useData() {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState<GameEntry[]>([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [topVotes, setTopVotes] = useState(0);

  useEffect(() => {
    const updateData = async () => {
      const fetched = await Promise.all([fetchVotes(), fetchTotal()]);
      let data = fetched[0];
      const total = fetched[1];

      const sortedGameIds = data.map((entry) => ({
        gameId: entry.gameId,
        votes: entry.votes,
      }));
      sortedGameIds.sort((a, b) => (a.votes > b.votes ? -1 : 1));

      let top = 0;

      data = data.map((entry) => {
        if (entry.votes > top) top = entry.votes;
        return {
          ...entry,
          sortIndex: sortedGameIds.findIndex((v) => v.gameId === entry.gameId),
        };
      });

      setLoading(false);
      setEntries(data);
      setTotalVotes(total);
      setTopVotes(top);
    };

    updateData();
    const interval = setInterval(
      () => updateData(),
      AppConfig.GetNumber("pullInterval")
    );
    return () => clearInterval(interval);
  }, []);

  return { loading, entries, totalVotes, topVotes };
}

export default useData;
