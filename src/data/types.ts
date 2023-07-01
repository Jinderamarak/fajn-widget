export type Entry = {
  id: number;
  name: string;
  votes: number;
};

export type Voting = {
  totalVotes: number;
  entries: Entry[];
};
