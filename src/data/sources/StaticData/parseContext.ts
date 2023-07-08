import { ParseContext } from "../../types";
import { Context } from "./types";

const parseContext: ParseContext<Context> = (params) => {
  if (!params.has("totalVotes") || !params.get("totalVotes")?.trim()) {
    throw new Error(`Missing totalVotes for StaticData source`);
  }

  if (!params.has("entryVotes") || !params.get("entryVotes")?.trim()) {
    throw new Error(`Missing entryVotes for StaticData source`);
  }

  return {
    totalVotes: parseInt(params.get("totalVotes")!),
    entryVotes: parseInt(params.get("entryVotes")!),
  };
};

export default parseContext;
