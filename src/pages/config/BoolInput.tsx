import React from "react";

export type TBoolInput = {
  type: "bool";
  value: boolean;
};

interface IBoolInput {
  name: string;
  value: any;
  change: (v: boolean) => void;
  remove: () => void;
}

function BoolInput({ name, value, change, remove }: IBoolInput) {
  return (
    <p className="param">
      <span className="base name">{name}</span>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => change(e.target.checked)}
      />
      <a
        className="base hoverable after"
        target="_blank"
        href={`https://github.com/Jinderamarak/fajn-widget#${name}`}
      >
        ?
      </a>
      <button className="base hoverable after" onClick={remove}>
        X
      </button>
    </p>
  );
}

export default BoolInput;
