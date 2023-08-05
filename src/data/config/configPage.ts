import sources from "../sources";
import presets from "./presets";

type ItemCommon = {
  key: string;
  label: string;
};

type ItemToggle = ItemCommon & {
  type: "toggle";
  default: boolean;
};

type ItemSelect = ItemCommon & {
  type: "select";
  options: string[];
  default: string;
};

type ItemNumber = ItemCommon & {
  type: "number";
  default: number;
};

type ItemColor = ItemCommon & {
  type: "color";
  default: string;
};

type ItemText = ItemCommon & {
  type: "text";
  default: string;
};

export type ConfigPageItem =
  | ItemToggle
  | ItemSelect
  | ItemNumber
  | ItemColor
  | ItemText;

export const configPage: ConfigPageItem[] = [
  {
    type: "select",
    key: "environment",
    label: "Environment",
    options: ["widget", "dimensions", "config"],
    default: "widget",
  },
  {
    type: "toggle",
    key: "showTotal",
    label: "Show Total",
    default: presets.default.showTotal,
  },
  {
    type: "toggle",
    key: "showForEntry",
    label: "Show For Entry",
    default: presets.default.showForEntry,
  },
  {
    type: "toggle",
    key: "useEntryPercentage",
    label: "Use Entry Percentage",
    default: presets.default.useEntryPercentage,
  },
  {
    type: "toggle",
    key: "barRelativeTop",
    label: "Bar Relative Top",
    default: presets.default.barRelativeTop,
  },
  {
    type: "toggle",
    key: "verticalCenter",
    label: "Vertical Center",
    default: presets.default.verticalCenter,
  },
  {
    type: "color",
    key: "back",
    label: "Back",
    default: presets.default.back,
  },
  {
    type: "color",
    key: "front",
    label: "Front",
    default: presets.default.front,
  },
  {
    type: "color",
    key: "accent",
    label: "Accent",
    default: presets.default.accent,
  },
  {
    type: "number",
    key: "scale",
    label: "Scale",
    default: presets.default.scale,
  },
  {
    type: "number",
    key: "pullInterval",
    label: "Pull Interval",
    default: presets.default.pullInterval,
  },
  {
    type: "select",
    key: "dataSource",
    label: "Data Source",
    options: sources.map((s) => s.name),
    default: presets.default.dataSource,
  },
];
