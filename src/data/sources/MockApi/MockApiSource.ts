import DataSource from "../../DataSource";
import RestClient from "../../RestClient";
import { Voting as ApiVoting } from "../FajnyApi/types";
import { Voting as ClientVoting } from "../../types";

export default class MockApiSource implements DataSource {
  private readonly restClient: RestClient<ApiVoting>;

  constructor(restClient: RestClient<ApiVoting>) {
    this.restClient = restClient;
  }

  async fetchData(category: string, limit: number): Promise<ClientVoting> {
    const data = await this.restClient.fetchData(`/data/${category}/${limit}`);
    return {
      totalVotes: data.total_votes,
      entries: data.entries.map((entry) => ({
        id: entry.entry.id,
        name: entry.entry.name,
        votes: entry.votes,
      })),
    };
  }
}
