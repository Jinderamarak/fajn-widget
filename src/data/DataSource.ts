import { Voting } from "./types";

export default interface DataSource {
  fetchData(category: string, limit: number): Promise<Voting>;
}
