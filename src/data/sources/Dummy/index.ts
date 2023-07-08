import { DataSource } from "../../types";
import fetchData from "./fetchData";
import parseContext from "./parseContext";

const dataSource: DataSource<object> = {
  name: "Dummy",
  fetchData,
  parseContext,
};

export default dataSource;
