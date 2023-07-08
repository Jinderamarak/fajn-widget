import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { configurationAtom, dataSourceAtom } from "./atoms";
import { SortedEntry } from "./types";

const useVotes = () => {
  const [config] = useRecoilState(configurationAtom);
  const [source] = useRecoilState(dataSourceAtom);

  const [loaded, setLoaded] = useState<boolean>(false);
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const [topVotes, setTopVotes] = useState<number>(0);
  const [entries, setEntries] = useState<SortedEntry[]>([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const data = await source.fetchData(
        config.category,
        config.limit,
        config.sourceContext
      );

      const top = data.entries.reduce(
        (acc, entry) => Math.max(acc, entry.votes),
        0
      );

      const sortedIds = data.entries
        .map((entry) => ({ id: entry.id, votes: entry.votes }))
        .sort((a, b) => b.votes - a.votes);

      const sortedEntries = data.entries.map((entry) => ({
        ...entry,
        sortId: sortedIds.findIndex((e) => e.id === entry.id),
      }));

      setTotalVotes(data.totalVotes);
      setTopVotes(top);
      setEntries(sortedEntries);
      setLoaded(true);
    }, config.pullInterval);

    return () => clearTimeout(timeout);
  }, [config, source]);

  return {
    loading: !loaded,
    totalVotes,
    topVotes,
    entries,
  };
};

export default useVotes;
