import { ConfigPageItem } from "./config/configPage";

export type VoteEntry = {
  id: any;
  name: string;
  votes: number;
};

export type Voting = {
  totalVotes: number;
  entries: VoteEntry[];
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
  scale: number;
  pullInterval: number;
  dataSource: string;
  sourceContext: any;
};

export type FetchData<T> = (context: T) => Promise<Voting>;

export type ParseContext<T> = (params: URLSearchParams) => T;

export type DataSource<T> = {
  name: string;
  configPage: ConfigPageItem[];
  fetchData: FetchData<T>;
  parseContext: ParseContext<T>;
};
