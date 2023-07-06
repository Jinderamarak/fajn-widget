import { atom } from "recoil";
import DummyDataSource from "./sources/Dummy/DummyDataSource";
import DataSource from "./sources/DataSource";
import { Configuration, Voting } from "./types";
import defaultConfig from "./config/presets/default.json";

export const dataSource = atom<DataSource>({
  key: "dataSource",
  default: new DummyDataSource(),
});

export const votingData = atom<Voting>({
  key: "votingData",
  default: {
    totalVotes: 0,
    entries: [],
  },
});

export const configuration = atom<Configuration<any>>({
  key: "configuration",
  default: defaultConfig,
});
