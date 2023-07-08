import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import Loading from "./utils/Loading";
import Widget from "./pages/widget/Widget";
import loadConfig from "./data/config/loadConfig";
import sources from "./data/sources";
import Config from "./pages/config/Config";
import {
  configurationAtom,
  dataSourceAtom,
  initializedAtom,
} from "./data/atoms";

const App: FC = () => {
  const [initialized, setInitialized] = useRecoilState(initializedAtom);
  const [config, setConfig] = useRecoilState(configurationAtom);
  const [_dataSource, setDataSource] = useRecoilState(dataSourceAtom);

  useEffect(() => {
    loadConfig().then((config) => {
      const source = sources.find((s) => s.name === config.dataSource);
      if (!source) {
        throw new Error(`Data source ${config.dataSource} not found`);
      }

      setConfig(config);
      setDataSource(source);
      setInitialized(true);
    });
  }, []);

  if (!initialized) {
    return <Loading />;
  }

  if (config.environment === "config") {
    return <Config />;
  }

  return <Widget />;
};

export default App;
