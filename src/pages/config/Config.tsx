import { useEffect, useState } from "react";
import BoolInput, { TBoolInput } from "./BoolInput";
import StringInput, { TStringInput } from "./StringInput";
import NumberInput, { TNumberInput } from "./NumberInput";
import ColorInput, { TColorInput } from "./ColorInput";
import MenuInput, { TMenuInput } from "./MenuInput";

const BASE_URL = `${location.origin}${location.pathname}`;

type TInput =
  | TBoolInput
  | TStringInput
  | TNumberInput
  | TColorInput
  | TMenuInput;
type TInputs = {
  [name: string]: TInput;
};

const PARAMETERS: TInputs = {
  environment: {
    type: "menu",
    value: "dev",
    options: ["dev", "widget", "dimensions"],
  },
  preset: {
    type: "menu",
    value: "static",
    options: ["none", "static", "mock"],
  },
  passToVotes: { type: "string", value: "" },
  passToTotal: { type: "string", value: "" },

  showTotal: { type: "bool", value: false },
  showForEntry: { type: "bool", value: false },
  useEntryPercentage: { type: "bool", value: false },
  barRelativeTop: { type: "bool", value: false },
  verticalCenter: { type: "bool", value: false },

  back: { type: "color", value: "#020923" },
  front: { type: "color", value: "#DEDFE2" },
  accent: { type: "color", value: "#1C233D" },

  votesSource: { type: "string", value: "" },
  totalSource: { type: "string", value: "" },

  scale: { type: "number", value: 1 },
  pullInterval: { type: "number", value: 1000 },
  testRows: { type: "number", value: 3 },
};

function Config() {
  const [selection, setSelection] = useState(Object.keys(PARAMETERS)[0]);
  const [params, setParams] = useState<TInputs>({});
  const [result, setResult] = useState("");

  const createResult = () => {
    const p = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (key === "environment") {
        p.set(`${params[key].value}`, "y");
      } else if (params[key].type === "bool") {
        p.set(key, params[key].value ? "y" : "n");
      } else {
        p.set(key, `${params[key].value}`);
      }
    });
    setResult(`${BASE_URL}?${p.toString()}`);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(result);
  };

  const changeParam = (name: string, value: any) => {
    setParams({ ...params, [name]: { ...params[name], value } });
  };

  const removeParam = (name: string) => {
    delete params[name];
    setParams({ ...params });
  };

  const addParam = (name: string) => {
    const newParams = { ...params, [name]: PARAMETERS[name] };
    const options = Object.keys(PARAMETERS).filter(
      (name) => !Object.keys(newParams).includes(name)
    );
    if (options.length > 0) {
      setSelection(options[0]);
    }
    setParams(newParams);
  };

  useEffect(() => {
    const t = setTimeout(createResult, 1000);
    return () => clearTimeout(t);
  }, [params]);

  useEffect(() => {
    const ps = {
      preset: { ...PARAMETERS.preset },
      passToVotes: { ...PARAMETERS.passToVotes },
      passToTotal: { ...PARAMETERS.passToTotal },
    };

    ps.preset.value = "fajnyc";
    ps.passToVotes.value = "?category=1&limit=5";
    ps.passToTotal.value = "?category=1";

    setParams({ ...ps });
  }, []);

  return (
    <section className="config">
      <div className="options">
        <h1>Config</h1>
        <div className="params">
          {Object.keys(params).map((name) => (
            <InputSwitch
              key={name}
              {...params[name]}
              name={name}
              change={(v: string | number | boolean) => changeParam(name, v)}
              remove={() => removeParam(name)}
            />
          ))}
        </div>
        <div className="controls">
          <div className="addition">
            <select
              value={selection}
              onChange={(e) => setSelection(e.target.value)}
            >
              {Object.keys(PARAMETERS).map((name) =>
                Object.keys(params).includes(name) ? undefined : (
                  <option key={name}>{name}</option>
                )
              )}
            </select>
            <button onClick={() => addParam(selection)}>Add</button>
          </div>
          <div className="result">
            <input readOnly value={result} />
            <button onClick={copyResult}>Copy</button>
            <button onClick={createResult}>Update</button>
          </div>
        </div>
      </div>
      <div className="frame">
        <iframe src={result} />
      </div>
    </section>
  );
}

type TInputTypeMapping = {
  string: string;
  number: number;
  bool: boolean;
  color: string;
  menu: string;
};

type TInputSwitch<T extends TInput> = T & {
  name: string;
  value: TInputTypeMapping[T["type"]];
  change: (v: TInputTypeMapping[T["type"]]) => void;
  remove: () => void;
};

function InputSwitch<T extends TInput>({ type, ...props }: TInputSwitch<T>) {
  if (type === "bool") {
    const typed = props as Omit<TInputSwitch<TBoolInput>, "type">;
    return <BoolInput {...typed} />;
  } else if (type === "number") {
    const typed = props as Omit<TInputSwitch<TNumberInput>, "type">;
    return <NumberInput {...typed} />;
  } else if (type === "string") {
    const typed = props as Omit<TInputSwitch<TStringInput>, "type">;
    return <StringInput {...typed} />;
  } else if (type === "color") {
    const typed = props as Omit<TInputSwitch<TColorInput>, "type">;
    return <ColorInput {...typed} />;
  } else if (type === "menu" && "options" in props) {
    const typed = props as Omit<TInputSwitch<TMenuInput>, "type">;
    return <MenuInput {...typed} />;
  }
}

export default Config;
