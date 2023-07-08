export type Entry = {
  id: any;
  name: string;
  votes: number;
};

export type SortedEntry = Entry & {
  sortId: number;
};

export type Voting = {
  totalVotes: number;
  entries: Entry[];
};

export type Environment = "widget" | "dimensions" | "config";

export type Configuration = {
  environment: Environment;
  showTotal: boolean;
  showForEntry: boolean;
  useEntryPercentage: boolean;
  barRelativeTop: boolean;
  verticalCenter: boolean;
  back: string;
  front: string;
  accent: string;
  category: string;
  limit: number;
  scale: number;
  pullInterval: number;
  dataSource: string;
  sourceContext: any;
};

export type FetchData<T> = (
  category: string,
  limit: number,
  context: T
) => Promise<Voting>;

export type ParseContext<T> = (params: URLSearchParams) => T;

export type DataSource<T> = {
  name: string;
  fetchData: FetchData<T>;
  parseContext: ParseContext<T>;
};
