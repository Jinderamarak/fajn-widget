type Bools =
  | "showTotal"
  | "showForEntry"
  | "useEntryPercentage"
  | "barRelativeTop"
  | "verticalCenter";
type Strings =
  | "environment"
  | "back"
  | "front"
  | "accent"
  | "votesSource"
  | "totalSource";
type Numbers = "scale" | "pullInterval" | "testRows";

type ValueTypes = {
  [K in Bools | Strings | Numbers]: K extends Bools
    ? boolean
    : K extends Strings
    ? string
    : number;
};

const DefaultValues = {
  showTotal: false,
  showForEntry: false,
  useEntryPercentage: false,
  barRelativeTop: false,
  verticalCenter: false,

  environment: "config",
  back: "#020923",
  front: "#DEDFE2",
  accent: "#1C233D",

  votesSource: "",
  totalSource: "",

  scale: 1,
  pullInterval: 1000,
  testRows: 3,
};

class AppConfig {
  private static instance: AppConfig;

  private static getInstance(): AppConfig {
    if (this.instance) return this.instance;
    this.instance = new AppConfig();
    return this.instance;
  }

  public static SetAny<K extends keyof ValueTypes>(
    a: K,
    v: ValueTypes[K]
  ): void {
    if (typeof v === "boolean") this.getInstance().bools[a as Bools] = v;
    if (typeof v === "string") this.getInstance().strings[a as Strings] = v;
    if (typeof v === "number") this.getInstance().numbers[a as Numbers] = v;
  }

  public static GetAll(): any {
    const i = this.getInstance();
    return { ...i.bools, ...i.strings, ...i.numbers };
  }

  public static GetBool(b: Bools): boolean {
    const c = this.getInstance().bools[b];
    if (c) {
      return c;
    } else {
      return DefaultValues[b];
    }

    //  OBS Browser Source not supporting ??. Why?
    //  return this.getInstance().bools[b] ?? DefaultValues[b];
  }

  public static SetBool(b: Bools, v: boolean): void {
    this.getInstance().bools[b] = v;
  }

  public static GetString(s: Strings): string {
    const c = this.getInstance().strings[s];
    if (c) {
      return c;
    } else {
      return DefaultValues[s];
    }
  }

  public static SetString(s: Strings, v: string): void {
    this.getInstance().strings[s] = v;
  }

  public static GetNumber(n: Numbers): number {
    const c = this.getInstance().numbers[n];
    if (c) {
      return c;
    } else {
      return DefaultValues[n];
    }
  }

  public static SetNumber(n: Numbers, v: number): void {
    this.getInstance().numbers[n] = v;
  }

  private bools: { [key in Bools]?: boolean };
  private strings: { [key in Strings]?: string };
  private numbers: { [key in Numbers]?: number };

  private constructor() {
    this.bools = {};
    this.strings = {};
    this.numbers = {};
  }
}

export default AppConfig;
