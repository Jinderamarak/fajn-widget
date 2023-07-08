import { useRecoilState } from "recoil";
import { Configuration } from "../types";
import { configuration } from "../atoms";

type ConfigName = keyof Configuration;

const useConfigValue = <K extends ConfigName>(name: K): Configuration[K] => {
  const [config] = useRecoilState(configuration);
  return config[name];
};

export default useConfigValue;
