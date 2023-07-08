import Loading from "../../components/Loading";
import useVotes from "../../data/useVotes";
import Results from "./Results";

const Widget = () => {
  const { loading, data } = useVotes();

  if (loading) return <Loading />;
  return <Results {...data} />;
};

export default Widget;
