import { useRecoilState } from "recoil";
import { Configuration } from "../types";
import { configurationAtom } from "../atoms";

type ConfigName = keyof Configuration;

const useConfigValue = <K extends ConfigName>(name: K): Configuration[K] => {
  const [config] = useRecoilState(configurationAtom);
  return config[name];
};

export default useConfigValue;
