import DataSource from "./DataSource";
import RestClient from "./RestClient";
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

export const buildDataSource = <K extends SourceName>(
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

export const parseSourceOptions = <K extends SourceName>(
  sourceName: K,
  params: URLSearchParams
): SourceOptionsMapping[K] => {
  switch (sourceName) {
    case "FajnyApi":
      if (!params.has("baseUrl") || !params.get("baseUrl")) {
        throw new Error(`Missing baseUrl for FajnyApi source`);
      }

      return {
        baseUrl: params.get("baseUrl")!,
      } as SourceOptionsMapping[K];
    case "MockApi":
      if (!params.has("baseUrl") || !params.get("baseUrl")) {
        throw new Error(`Missing baseUrl for MockApi source`);
      }

      return {
        baseUrl: params.get("baseUrl")!,
      } as SourceOptionsMapping[K];
    case "StaticData":
      if (!params.has("totalVotes") || !params.get("totalVotes")) {
        throw new Error(`Missing totalVotes for StaticData source`);
      }

      if (!params.has("entryVotes") || !params.get("entryVotes")) {
        throw new Error(`Missing entryVotes for StaticData source`);
      }

      return {
        totalVotes: parseInt(params.get("totalVotes")!),
        entryVotes: parseInt(params.get("entryVotes")!),
      } as SourceOptionsMapping[K];
  }

  throw new Error(`Unknown source: ${sourceName}`);
};
