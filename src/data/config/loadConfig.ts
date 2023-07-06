import { parseSourceOptions } from "../sources/sources";
import { Configuration, Environment } from "../types";
import presetDefault from "./presets/default.json";
import presetMock from "./presets/mock.json";

const presets = {
  default: {
    ...presetDefault,
    environment: presetDefault.environment as Environment,
  },
  mock: {
    ...presetMock,
    environment: presetDefault.environment as Environment,
  },
};

const parseBool = (v: any): boolean => {
  if (typeof v !== "string") {
    return v ? true : false;
  }

  if (v.startsWith("y") || v.startsWith("true") || v.startsWith("1")) {
    return true;
  }

  return false;
};

const loadConfig = () => {
  let config: Configuration<any> = presets.default;
  const params = new URLSearchParams(location.search);

  if (params.has("preset")) {
    const preset = params.get("preset")!;
    if (preset in presets) {
      config = {
        ...config,
        ...presets[preset as keyof typeof presets],
      };
    }
  }

  if (params.has("widget") || params.get("environment") === "widget") {
    config.environment = "widget";
  }

  if (params.has("dimensions") || params.get("environment") === "dimensions") {
    config.environment = "dimensions";
  }

  if (params.has("config") || params.get("environment") === "config") {
    config.environment = "config";
  }

  if (params.has("showTotal")) {
    config.showTotal = parseBool(params.get("showTotal"));
  }

  if (params.has("showForEntry")) {
    config.showForEntry = parseBool(params.get("showForEntry"));
  }

  if (params.has("useEntryPercentage")) {
    config.useEntryPercentage = parseBool(params.get("useEntryPercentage"));
  }

  if (params.has("barRelativeTop")) {
    config.barRelativeTop = parseBool(params.get("barRelativeTop"));
  }

  if (params.has("verticalCenter")) {
    config.verticalCenter = parseBool(params.get("verticalCenter"));
  }

  if (params.has("back")) {
    config.back = params.get("back")!;
  }

  if (params.has("front")) {
    config.front = params.get("front")!;
  }

  if (params.has("accent")) {
    config.accent = params.get("accent")!;
  }

  if (params.has("scale")) {
    config.scale = parseFloat(params.get("scale")!);
  }

  if (params.has("pullInterval")) {
    config.pullInterval = parseInt(params.get("pullInterval")!);
  }

  if (params.has("dataSource")) {
    config.dataSource = params.get("dataSource")!;
  }

  config.sourceOptions = parseSourceOptions(config.dataSource, params);

  return config;
};

export default loadConfig;
