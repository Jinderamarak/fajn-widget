import Sources from "../sources";
import { Configuration } from "../types";
import presets from "./presets";

const parseBool = (v: any): boolean => {
  if (typeof v !== "string") {
    return v ? true : false;
  }

  if (v.startsWith("y") || v.startsWith("true") || v.startsWith("1")) {
    return true;
  }

  return false;
};

const loadConfig = async () => {
  let config: Configuration = presets.default;
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
    config.back = params.get("back")!.trim();
  }

  if (params.has("front")) {
    config.front = params.get("front")!.trim();
  }

  if (params.has("accent")) {
    config.accent = params.get("accent")!.trim();
  }

  if (params.has("scale")) {
    config.scale = parseFloat(params.get("scale")!);
  }

  if (params.has("pullInterval")) {
    config.pullInterval = parseInt(params.get("pullInterval")!);
  }

  if (params.has("dataSource")) {
    config.dataSource = params.get("dataSource")!;
    const source = Sources.find((s) => s.name === config.dataSource);
    if (source) {
      config.sourceContext = source.parseContext(params);
    }
  }

  document.documentElement.style.setProperty("--scale", `${config.scale}rem`);
  document.documentElement.style.setProperty("--back", config.back);
  document.documentElement.style.setProperty("--front", config.front);
  document.documentElement.style.setProperty("--accent", config.accent);

  if (config.verticalCenter) {
    document.documentElement.setAttribute("data-vertical-center", "true");
  } else {
    document.documentElement.removeAttribute("data-vertical-center");
  }

  return config;
};

export default loadConfig;
