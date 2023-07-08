import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { configurationAtom, dataSourceAtom } from "./atoms";
import { VoteEntry } from "./types";

const useVotes = () => {
  const [config] = useRecoilState(configurationAtom);
  const [source] = useRecoilState(dataSourceAtom);

  const [loaded, setLoaded] = useState<boolean>(false);
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const [topVotes, setTopVotes] = useState<number>(0);
  const [entries, setEntries] = useState<VoteEntry[]>([]);

  useEffect(() => {
    const timeout = setInterval(async () => {
      const data = await source.fetchData(config.sourceContext);

      const top = data.entries.reduce(
        (acc, entry) => Math.max(acc, entry.votes),
        0
      );

      const sortedEntries = data.entries.sort((a, b) => b.votes - a.votes);

      setTotalVotes(data.totalVotes);
      setTopVotes(top);
      setEntries(sortedEntries);
      setLoaded(true);
    }, config.pullInterval);

    return () => clearInterval(timeout);
  }, [config, source]);

  return {
    loading: !loaded,
    totalVotes,
    topVotes,
    entries,
  };
};

export default useVotes;
