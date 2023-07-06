import { atom } from "recoil";
import DummyDataSource from "./sources/Dummy/DummyDataSource";
import DataSource from "./sources/DataSource";
import { Configuration, Environment } from "./types";
import defaultConfig from "./config/presets/default.json";

export const dataSource = atom<DataSource>({
  key: "dataSource",
  default: new DummyDataSource(),
});

export const configuration = atom<Configuration<any>>({
  key: "configuration",
  default: {
    ...defaultConfig,
    environment: defaultConfig.environment as Environment,
  },
});
