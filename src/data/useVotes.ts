import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { configurationAtom, dataSourceAtom } from "./atoms";
import { Voting } from "./types";

const useVotes = (category: string, limit: number) => {
  const [config] = useRecoilState(configurationAtom);
  const [source] = useRecoilState(dataSourceAtom);

  const [voting, setVoting] = useState<Voting>();

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const data = await source.fetchData(
        category,
        limit,
        config.sourceContext
      );
      setVoting({
        totalVotes: data.totalVotes,
        entries: data.entries.sort((a, b) => b.votes - a.votes),
      });
    }, config.pullInterval);

    return () => clearTimeout(timeout);
  }, [config, source]);

  return {
    loading: !voting,
    data: voting!,
  };
};

export default useVotes;
