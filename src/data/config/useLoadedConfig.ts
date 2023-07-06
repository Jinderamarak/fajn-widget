import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { Configuration } from "../types";
import { configuration } from "../atoms";
import loadConfig from "./loadConfig";

const useLoadedConfig = (): Configuration<any> => {
  const setConfig = useRecoilState(configuration)[1];

  const config = useMemo(() => {
    const loaded = loadConfig();
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
  }, []);

  return config;
};

export default useLoadedConfig;
