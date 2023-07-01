import React from "react";

export type TNumberInput = {
  type: "number";
  value: number;
};

interface INumberInput {
  name: string;
  value: any;
  change: (v: number) => void;
  remove: () => void;
}

function NumberInput({ name, value, change, remove }: INumberInput) {
  return (
    <p className="param">
      <span className="base name">{name}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => change(parseFloat(e.target.value))}
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

export default NumberInput;
