import { useEffect, useState } from "react";
import useWindowTitle from "../../utils/useWindowTitle";
import {
  ConfigPageItem,
  ItemSelect,
  configPageItems,
} from "../../data/config/configPage";
import presets from "../../data/config/presets";
import SelectInput from "./Inputs/SelectInput";
import ConfigSection from "./ConfigSection";
import sources from "../../data/sources";

const baseUrl = `${location.origin}${location.pathname}`;
const defaultWidgetItems = [
  {
    ...(configPageItems[0] as ItemSelect),
    value: "widget",
  },
];
const defaultWidgetUrl = `${baseUrl}?environment=widget`;

type PresetName = keyof typeof presets;

function Config() {
  useWindowTitle("Fajn Widget - Config");
  const [preset, setPreset] = useState<PresetName | null>(null);
  const [widgetItems, setWidgetItems] =
    useState<ConfigPageItem[]>(defaultWidgetItems);
  const [sourceItems, setSourceItems] = useState<ConfigPageItem[]>([]);
  const [widgetUrl, setWidgetUrl] = useState<string>(defaultWidgetUrl);

  const buildWidgetUrl = () => {
    const params = new URLSearchParams();
    if (preset) {
      params.set("preset", preset);
    }
    widgetItems.forEach((item) => {
      params.set(item.key, `${item.value}`);
    });
    sourceItems.forEach((item) => {
      params.set(item.key, `${item.value}`);
    });
    setWidgetUrl(`${baseUrl}?${params.toString()}`);
  };

  const copyWidgetUrl = () => {
    navigator.clipboard.writeText(widgetUrl);
  };

  useEffect(() => {
    const t = setTimeout(buildWidgetUrl, 1000);
    return () => clearTimeout(t);
  }, [preset, widgetItems, sourceItems]);

  return (
    <section className="config">
      <div className="options">
        <h1>Config</h1>
        <div className="params">
          <SelectInput
            item={{
              key: "preset",
              type: "select",
              label: "Preset",
              value: preset || "",
              options: Object.keys(presets),
            }}
            onChangeValue={(item) => setPreset(item.value as PresetName)}
            onRemove={() => setPreset(null)}
          />
        </div>
        <ConfigSection
          title="Widget"
          possibleItems={configPageItems}
          items={widgetItems}
          setItems={setWidgetItems}
        />
        <ConfigSection
          title="Source"
          possibleItems={sources
            .map((s) => s.configPage)
            .flat()
            .filter(
              (item, i, a) => a.findIndex((it) => it.key === item.key) === i
            )}
          items={sourceItems}
          setItems={setSourceItems}
        />
        <div className="controls">
          <h2>Result</h2>
          <div className="result">
            <input readOnly value={widgetUrl} />
            <button onClick={copyWidgetUrl}>Copy</button>
            <button onClick={buildWidgetUrl}>Update</button>
          </div>
        </div>
      </div>
      <div className="frame">
        <iframe src={widgetUrl} />
      </div>
    </section>
  );
}

export default Config;
