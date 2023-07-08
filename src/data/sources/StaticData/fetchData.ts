import { FetchData } from "../../types";
import { Context, games } from "./types";

const fetchData: FetchData<Context> = async (context) => {
  const gameNames = games.slice(0, context.limit);
  const step = Math.max(1, Math.floor(context.entryVotes / context.limit));

  return {
    totalVotes: context.totalVotes,
    entries: gameNames.map((name, index) => ({
      id: index,
      name,
      votes: context.entryVotes - index * step,
    })),
  };
};

export default fetchData;
