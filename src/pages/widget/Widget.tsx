import { FC } from "react";
import Loading from "../../components/Loading";
import useVotes from "../../data/useVotes";
import Entry from "./Entry";
import Summary from "./Summary";

const Widget: FC = () => {
  const { loading, entries, topVotes, totalVotes } = useVotes();

  if (loading) return <Loading />;

  return (
    <section className="results">
      <div className="panel">
        {entries.map((entry, index) => (
          <Entry
            key={entry.id}
            entry={entry}
            topVotes={topVotes}
            totalVotes={totalVotes}
            position={index}
          />
        ))}
      </div>
      <Summary totalVotes={totalVotes} />
    </section>
  );
};

export default Widget;
