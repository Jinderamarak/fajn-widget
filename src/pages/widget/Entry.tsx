import { FC } from "react";
import { VoteEntry } from "../../data/types";
import { useRecoilState } from "recoil";
import { configurationAtom } from "../../data/atoms";

type Props = {
  entry: VoteEntry;
  topVotes: number;
  totalVotes: number;
};

const formatPercent = (percent: number): number => {
  return Math.max(Math.min(Math.round(percent * 100), 100), 0) || 0;
};

const Entry: FC<Props> = ({ entry, topVotes, totalVotes }) => {
  const [config] = useRecoilState(configurationAtom);

  const relativeMax = config.barRelativeTop ? topVotes : totalVotes;
  const countLabel = config.useEntryPercentage
    ? `${formatPercent(entry.votes / totalVotes)}%`
    : `${entry.votes}`;

  return (
    <div
      key={entry.id}
      className="entry"
      style={{
        backgroundPositionX: `${(1 - entry.votes / relativeMax) * 100}%`,
      }}
    >
      <span className="title">{entry.name}</span>
      {config.showForEntry && <span className="count">{countLabel}</span>}
    </div>
  );
};

export default Entry;
