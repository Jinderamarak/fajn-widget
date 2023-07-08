import { atom } from "recoil";
import DummyDataSource from "./sources/Dummy";
import { Configuration, DataSource, Environment } from "./types";
import defaultConfig from "./config/presets/default.json";

export const dataSource = atom<DataSource<any>>({
  key: "dataSource",
  default: DummyDataSource,
});

export const configuration = atom<Configuration>({
  key: "configuration",
  default: {
    ...defaultConfig,
    environment: defaultConfig.environment as Environment,
  },
});
