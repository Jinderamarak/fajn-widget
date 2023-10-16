import { FC, useEffect, useState } from "react";
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
import * as ErrorHandler from "./utils/Error";

const App: FC = () => {
  const [initialized, setInitialized] = useRecoilState(initializedAtom);
  const [config, setConfig] = useRecoilState(configurationAtom);
  const [_dataSource, setDataSource] = useRecoilState(dataSourceAtom);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadConfig()
      .then((config) => {
        const source = sources.find((s) => s.name === config.dataSource);
        if (!source) {
          throw new Error(`Data source ${config.dataSource} not found`);
        }

        setConfig(config);
        setDataSource(source);
        setInitialized(true);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  if (error) {
    return <ErrorHandler.default message={error} />;
  }

  if (!initialized) {
    return <Loading />;
  }

  if (config.environment === "config") {
    return <Config />;
  }

  return <Widget />;
};

export default App;
