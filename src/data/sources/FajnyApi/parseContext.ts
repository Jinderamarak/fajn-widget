import { ParseContext } from "../../types";
import { Context } from "./types";

const parseContext: ParseContext<Context> = (params) => {
  if (!params.has("apiUrl") || !params.get("apiUrl")?.trim()) {
    throw new Error(`Missing apiUrl for FajnyApi source`);
  }

  if (!params.has("category") || !params.get("category")?.trim()) {
    throw new Error(`Missing category for FajnyApi source`);
  }

  if (!params.has("limit") || !params.get("limit")?.trim()) {
    throw new Error(`Missing limit for FajnyApi source`);
  }

  return {
    apiUrl: params.get("apiUrl")!.trim(),
    category: params.get("category")!.trim(),
    limit: parseInt(params.get("limit")!),
  };
};

export default parseContext;
