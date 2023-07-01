export type TColorInput = {
  type: "color";
  value: string;
};

interface IColorInput {
  name: string;
  value: string;
  change: (v: string) => void;
  remove: () => void;
}

function ColorInput({ name, value, change, remove }: IColorInput) {
  return (
    <p className="param">
      <span className="base name">{name}</span>
      <input
        type="color"
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

export default ColorInput;
