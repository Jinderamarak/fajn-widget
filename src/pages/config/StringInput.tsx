import React from "react";

export type TStringInput = {
  type: "string";
  value: string;
};

interface IStringInput {
  name: string;
  value: any;
  change: (v: string) => void;
  remove: () => void;
}

function StringInput({ name, value, change, remove }: IStringInput) {
  return (
    <p className="param">
      <span className="base name">{name}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => change(e.target.value)}
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

export default StringInput;
