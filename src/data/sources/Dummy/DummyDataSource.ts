import DataSource from "../DataSource";
import { Voting } from "../../types";

export default class DummyDataSource implements DataSource {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetchData(_category: string, _limit: number): Promise<Voting> {
    return {
      totalVotes: 0,
      entries: [],
    };
  }
}
