import { FetchData } from "../../types";

const fetchData: FetchData<object> = async () => {
  return {
    totalVotes: 0,
    entries: [],
  };
};

export default fetchData;
