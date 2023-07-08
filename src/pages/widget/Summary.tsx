import { FC } from "react";
import { useRecoilState } from "recoil";
import { configurationAtom } from "../../data/atoms";

type Props = {
  totalVotes: number;
};

const Summary: FC<Props> = ({ totalVotes }) => {
  const [config] = useRecoilState(configurationAtom);

  if (!config.showTotal) return null;

  return (
    <div className="panel summary">
      <span className="title">Počet hlasů:</span>
      <span className="count">{totalVotes}</span>
    </div>
  );
};

export default Summary;
