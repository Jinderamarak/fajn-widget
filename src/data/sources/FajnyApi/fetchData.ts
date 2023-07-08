import { FetchData } from "../../types";
import { Context, Voting } from "./types";

const fetchData: FetchData<Context> = async (context) => {
  const response = await fetch(
    `${context.apiUrl}/${context.category}/${context.limit}`
  );
  const data: Voting = await response.json();

  return {
    totalVotes: data.total_votes,
    entries: data.entries.map((entry) => ({
      id: entry.entry.id,
      name: entry.entry.name,
      votes: entry.votes,
    })),
  };
};

export default fetchData;
