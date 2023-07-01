import { atom } from "recoil";
import DummyDataSource from "./sources/Dummy/DummyDataSource";
import DataSource from "./sources/DataSource";
import { Voting } from "./types";

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
