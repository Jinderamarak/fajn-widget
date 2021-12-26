
type Bools = "showTotal" | "showForEntry" | "useEntryPercentage" | "barRelativeTop"
type Strings = "environment" | "url" | "back" | "front" | "accent"
type Numbers = "scale" | "pullInterval" | "testRows"

const DefaultValues = {
    showTotal: false,
    showForEntry: false,
    useEntryPercentage: false,
    barRelativeTop: false,
    environment: "config",
    url: "",
    scale: 1,
    pullInterval: 1000,
    testRows: 3,
    back: "#020923",
    front: "#DEDFE2",
    accent: "#1C233D"
}

class AppConfig {

    private static instance: AppConfig;

    private static getInstance(): AppConfig {
        if (this.instance) return this.instance;
        this.instance = new AppConfig();
        return this.instance;
    }

    public static SetAny(a: string, v: any): void {
        if (typeof v === "boolean") this.getInstance().bools[a] = v;
        if (typeof v === "string") this.getInstance().strings[a] = v;
        if (typeof v === "number") this.getInstance().numbers[a] = v;
    }

    public static GetAll(): any {
        const i = this.getInstance();
        return {...i.bools, ...i.strings, ...i.numbers};
    }


    public static GetBool(b: Bools): boolean {
        const c = this.getInstance().bools[b]
        if (c) {
            return c;
        } else {
            return DefaultValues[b]
        }

        //  OBS Browser Source not supporting ??. Why?
        //  return this.getInstance().bools[b] ?? DefaultValues[b];
    }

    public static SetBool(b: Bools, v: boolean): void {
        this.getInstance().bools[b] = v;
    }


    public static GetString(s: Strings): string {
        const c = this.getInstance().strings[s]
        if (c) {
            return c;
        } else {
            return DefaultValues[s]
        }

        //return this.getInstance().strings[s] ?? DefaultValues[s];
    }

    public static SetString(s: Strings, v: string): void {
        this.getInstance().strings[s] = v;
    }


    public static GetNumber(n: Numbers): number {
        const c = this.getInstance().numbers[n]
        if (c) {
            return c;
        } else {
            return DefaultValues[n]
        }

        //return this.getInstance().numbers[n] ?? DefaultValues[n];
    }

    public static SetNumber(n: Numbers, v: number): void {
        this.getInstance().numbers[n] = v;
    }


    private bools: {[key in Bools]?: boolean};
    private strings: {[key in Strings]?: string};
    private numbers: {[key in Numbers]?: number};

    private constructor() {
        this.bools = {}
        this.strings = {}
        this.numbers = {}
    }

}

export default AppConfig;
