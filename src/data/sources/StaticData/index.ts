import { DataSource } from "../../types";
import fetchData from "./fetchData";
import parseContext from "./parseContext";
import { Context } from "./types";

const dataSource: DataSource<Context> = {
  name: "StaticData",
  fetchData,
  parseContext,
};

export default dataSource;
