import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { configuration, dataSource } from "./atoms";
import { Voting } from "./types";

const useVotes = (category: string, limit: number) => {
  const [config] = useRecoilState(configuration);
  const [source] = useRecoilState(dataSource);

  const [voting, setVoting] = useState<Voting>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      source.fetchData(category, limit).then((voting) => {
        setVoting(voting);
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
