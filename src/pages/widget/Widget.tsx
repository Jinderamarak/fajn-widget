import { FC } from "react";
import Loading from "../../utils/Loading";
import useVotes from "../../data/useVotes";
import Entry from "./Entry";
import Summary from "./Summary";
import { Flipper, Flipped } from "react-flip-toolkit";

let lastKey = "";

const Widget: FC = () => {
  const { loading, entries, topVotes, totalVotes } = useVotes();

  if (loading) return <Loading />;

  const flipKey = entries.reduce((acc, entry) => `${acc}-${entry.id}`, "");
  if (flipKey !== lastKey) {
    lastKey = flipKey;
    console.log("flipKey", flipKey);
  }

  return (
    <section className="results">
      <div className="panel">
        <Flipper flipKey={flipKey}>
          {entries.map((entry) => (
            <Flipped key={entry.id} flipId={entry.id}>
              <div>
                <Entry
                  entry={entry}
                  topVotes={topVotes}
                  totalVotes={totalVotes}
                />
              </div>
            </Flipped>
          ))}
        </Flipper>
      </div>
      <Summary totalVotes={totalVotes} />
    </section>
  );
};

export default Widget;
