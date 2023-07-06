import Loading from "../../components/Loading";
import Results from "./Results";
import useData from "../../utils/useData";

function Widget() {
  const { loading, ...data } = useData();

  if (loading) return <Loading />;
  return <Results {...data} />;
}

export default Widget;
