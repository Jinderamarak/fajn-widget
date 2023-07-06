import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { Configuration } from "../types";
import { configuration } from "../atoms";
import loadConfig from "./loadConfig";

const useLoadedConfig = (): Configuration<any> => {
  const [oldConfig, setConfig] = useRecoilState(configuration);

  const config = useMemo(() => {
    const loaded = loadConfig();

    const oldConfigJson = JSON.stringify(oldConfig);
    const loadedJson = JSON.stringify(loaded);
    if (oldConfigJson === loadedJson) {
      return oldConfig;
    }

    setConfig(loaded);

    document.documentElement.style.setProperty("--scale", `${loaded.scale}rem`);
    document.documentElement.style.setProperty("--back", config.back);
    document.documentElement.style.setProperty("--front", config.front);
    document.documentElement.style.setProperty("--accent", config.accent);

    if (loaded.verticalCenter) {
      document.documentElement.setAttribute("data-vertical-center", "true");
    } else {
      document.documentElement.removeAttribute("data-vertical-center");
    }

    return loaded;
  }, [oldConfig]);

  return config;
};

export default useLoadedConfig;
