import { SourceName, SourceOptionsMapping } from "./sources/sources";

export type Entry = {
  id: number;
  name: string;
  votes: number;
};

export type Voting = {
  totalVotes: number;
  entries: Entry[];
};

export type Environment = "widget" | "dimensions" | "config";

export type Configuration<K extends SourceName> = {
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
  dataSource: K;
  sourceOptions: SourceOptionsMapping[K];
};
