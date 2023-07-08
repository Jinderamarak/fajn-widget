import { Environment } from "../../types";
import presetDefault from "./default.json";
import presetMock from "./mock.json";
import presetStatic from "./static.json";

const presets = {
  default: {
    ...presetDefault,
    environment: presetDefault.environment as Environment,
  },
  mock: {
    ...presetMock,
    environment: presetMock.environment as Environment,
  },
  static: {
    ...presetStatic,
    environment: presetStatic.environment as Environment,
  },
};

export default presets;
