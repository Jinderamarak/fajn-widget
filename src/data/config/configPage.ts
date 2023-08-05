import sources from "../sources";
import presets from "./presets";

type ItemCommon = {
  key: string;
  label: string;
};

export type ItemToggle = ItemCommon & {
  type: "toggle";
  value: boolean;
};

export type ItemSelect = ItemCommon & {
  type: "select";
  options: string[];
  value: string;
};

export type ItemNumber = ItemCommon & {
  type: "number";
  value: number;
};

export type ItemColor = ItemCommon & {
  type: "color";
  value: string;
};

export type ItemText = ItemCommon & {
  type: "text";
  value: string;
};

export type ConfigPageItem =
  | ItemToggle
  | ItemSelect
  | ItemNumber
  | ItemColor
  | ItemText;

export const configPageItems: ConfigPageItem[] = [
  {
    type: "select",
    key: "environment",
    label: "Environment",
    options: ["widget", "dimensions", "config"],
    value: "widget",
  },
  {
    type: "toggle",
    key: "showTotal",
    label: "Show Total",
    value: presets.default.showTotal,
  },
  {
    type: "toggle",
    key: "showForEntry",
    label: "Show For Entry",
    value: presets.default.showForEntry,
  },
  {
    type: "toggle",
    key: "useEntryPercentage",
    label: "Use Entry Percentage",
    value: presets.default.useEntryPercentage,
  },
  {
    type: "toggle",
    key: "barRelativeTop",
    label: "Bar Relative Top",
    value: presets.default.barRelativeTop,
  },
  {
    type: "toggle",
    key: "verticalCenter",
    label: "Vertical Center",
    value: presets.default.verticalCenter,
  },
  {
    type: "color",
    key: "back",
    label: "Back",
    value: presets.default.back,
  },
  {
    type: "color",
    key: "front",
    label: "Front",
    value: presets.default.front,
  },
  {
    type: "color",
    key: "accent",
    label: "Accent",
    value: presets.default.accent,
  },
  {
    type: "number",
    key: "scale",
    label: "Scale",
    value: presets.default.scale,
  },
  {
    type: "number",
    key: "pullInterval",
    label: "Pull Interval",
    value: presets.default.pullInterval,
  },
  {
    type: "select",
    key: "dataSource",
    label: "Data Source",
    options: sources.map((s) => s.name),
    value: presets.default.dataSource,
  },
];
