import { FC, ReactNode } from "react";

type Props = {
  refKey: string;
  label: string;
  onRemove: () => void;
  children: ReactNode;
};

const BaseInput: FC<Props> = (props: Props) => {
  const { refKey, label, onRemove, children } = props;

  return (
    <p className="param">
      <button className="base hoverable after" onClick={onRemove}>
        X
      </button>
      <a
        className="base hoverable after"
        target="_blank"
        href={`https://github.com/Jinderamarak/fajn-widget#${refKey}`}
      >
        ?
      </a>
      <span className="base name">{label}</span>
      {children}
    </p>
  );
};

export default BaseInput;
