import { useRecoilState } from "recoil";
import Loading from "./components/Loading";
import useLoadedConfig from "./data/config/useLoadedConfig";
import { dataSource } from "./data/atoms";
import DummyDataSource from "./data/sources/Dummy/DummyDataSource";
import { buildDataSource } from "./data/sources";
import Widget from "./pages/widget/Widget";
import Config from "./pages/config/Config";

const App = () => {
  const config = useLoadedConfig();
  const [data, setData] = useRecoilState(dataSource);

  if (config.environment === "config") {
    return <Config />;
  }

  if (data instanceof DummyDataSource) {
    setData(buildDataSource(config.dataSource, config.sourceOptions));
    return <Loading />;
  }

  return <Widget />;
};

export default App;
