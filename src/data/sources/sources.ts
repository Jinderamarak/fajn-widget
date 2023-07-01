import DataSource from "../DataSource";
import RestClient from "../RestClient";
import FajnyApiSource from "./FajnyApi/FajnyApiSource";
import MockApiSource from "./MockApi/MockApiSource";
import StaticDataSource from "./StaticData/StaticDataSource";

type Source = {
  FajnyApi: FajnyApiSource;
  MockApi: MockApiSource;
  StaticData: StaticDataSource;
};

export type SourceName = keyof Source;

export type SourceOptionsMapping = {
  FajnyApi: {
    baseUrl: string;
  };
  MockApi: {
    baseUrl: string;
  };
  StaticData: {
    totalVotes: number;
    entryVotes: number;
  };
};

const buildDataSource = <K extends SourceName>(
  sourceName: K,
  options: SourceOptionsMapping[K]
): DataSource => {
  if (sourceName === "FajnyApi") {
    const typedOptions = options as SourceOptionsMapping["FajnyApi"];
    return new FajnyApiSource(new RestClient(typedOptions.baseUrl));
  }

  if (sourceName === "MockApi") {
    const typedOptions = options as SourceOptionsMapping["MockApi"];
    return new MockApiSource(new RestClient(typedOptions.baseUrl));
  }

  if (sourceName === "StaticData") {
    const typedOptions = options as SourceOptionsMapping["StaticData"];
    return new StaticDataSource(
      typedOptions.totalVotes,
      typedOptions.entryVotes
    );
  }

  throw new Error(`Unknown source: ${sourceName}`);
};

export default buildDataSource;
