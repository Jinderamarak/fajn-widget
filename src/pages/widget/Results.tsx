import AppConfig from "../../utils/AppConfig";
import { GameEntry } from "../../utils/useData";
import ShowIf from "../../components/ShowIf";

const GetPercentage = (value: number, total: number): number => {
  return Math.max(Math.min(Math.round((value / total) * 100), 100), 0) || 0;
};

const GetEntryCount = (votes: number, total: number): string => {
  if (!AppConfig.GetBool("showForEntry")) return "";
  if (AppConfig.GetBool("useEntryPercentage")) {
    return `${GetPercentage(votes, total)}%`;
  } else {
    return `${votes}`;
  }
};

interface IResults {
  entries: GameEntry[];
  totalVotes: number;
  topVotes: number;
}

function Results({ entries, totalVotes, topVotes }: IResults) {
  return (
    <section className="results">
      <div className="panel">
        {entries.map((entry, i) => (
          <div
            key={entry.gameId}
            className="entry"
            style={{
              backgroundPositionX: `${
                100 -
                GetPercentage(
                  entry.votes,
                  AppConfig.GetBool("barRelativeTop") ? topVotes : totalVotes
                )
              }%`,
              transform: `translateY(${(entry.sortIndex - i) * 4.5}rem)`,
            }}
          >
            <span className="title">{entry.gameName}</span>
            <span className="count">
              {GetEntryCount(entry.votes, totalVotes)}
            </span>
          </div>
        ))}
      </div>
      <ShowIf ifp={AppConfig.GetBool("showTotal")}>
        <div className="panel summary">
          <span className="title">Počet hlasů:</span>
          <span className="count">{totalVotes}</span>
        </div>
      </ShowIf>
    </section>
  );
}

export default Results;
