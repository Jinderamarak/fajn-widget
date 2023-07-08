import { FetchData } from "../../types";
import { Context, games } from "./types";

const fetchData: FetchData<Context> = async (_c, limit, context) => {
  const gameNames = games.slice(0, limit);
  const step = context.totalVotes / limit;

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
