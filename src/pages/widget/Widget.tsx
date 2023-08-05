import { FC } from "react";
import Loading from "../../utils/Loading";
import useVotes from "../../data/useVotes";
import Entry from "./Entry";
import Summary from "./Summary";
import { Flipper, Flipped } from "react-flip-toolkit";
import useWindowTitle from "../../utils/useWindowTitle";

let lastKey = "";

const Widget: FC = () => {
  useWindowTitle("Fajn Widget - Widget");
  const { loading, entries, topVotes, totalVotes } = useVotes();

  if (loading) return <Loading />;

  const flipKey = entries.reduce((acc, entry) => `${acc}-${entry.id}`, "");
  if (flipKey !== lastKey) {
    lastKey = flipKey;
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
