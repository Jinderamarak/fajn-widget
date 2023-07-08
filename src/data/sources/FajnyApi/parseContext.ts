import { ParseContext } from "../../types";
import { Context } from "./types";

const parseContext: ParseContext<Context> = (params) => {
  if (!params.has("apiUrl") || !params.get("apiUrl")?.trim()) {
    throw new Error(`Missing apiUrl for FajnyApi source`);
  }

  return {
    apiUrl: params.get("apiUrl")!.trim(),
  };
};

export default parseContext;
