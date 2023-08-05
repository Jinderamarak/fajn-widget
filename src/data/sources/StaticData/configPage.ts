import { ConfigPageItem } from "../../config/configPage";

const configPage: ConfigPageItem[] = [
  {
    type: "number",
    key: "totalVotes",
    label: "Total Votes",
    default: 1000,
  },
  {
    type: "number",
    key: "entryVotes",
    label: "Entry Votes",
    default: 10,
  },
  {
    type: "number",
    key: "limit",
    label: "Results Limit",
    default: 10,
  },
];

export default configPage;
