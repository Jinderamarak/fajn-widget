import { DataSource } from "../../types";
import configPage from "./configPage";
import fetchData from "./fetchData";
import parseContext from "./parseContext";
import { Context } from "./types";

const dataSource: DataSource<Context> = {
  name: "FajnyApi",
  configPage,
  fetchData,
  parseContext,
};

export default dataSource;
