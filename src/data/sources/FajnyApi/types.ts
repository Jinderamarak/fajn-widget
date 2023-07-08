export type User = {
  id: number;
  user_name: string;
  snowflake: string;
};

export type Category = {
  id: number;
  name: string;
  channel: string;
};

export type Entry = {
  id: number;
  name: string;
  category: Category;
  user: User;
  state: number;
  message: unknown;
};

export type VotedEntry = {
  entry: Entry;
  votes: number;
};

export type Voting = {
  total_votes: number;
  entries: VotedEntry[];
};

export type Context = {
  apiUrl: string;
};
