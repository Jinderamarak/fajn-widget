import { ConfigPageItem } from "../../config/configPage";

const configPage: ConfigPageItem[] = [
  {
    type: "number",
    key: "totalVotes",
    label: "Total Votes",
    value: 1000,
  },
  {
    type: "number",
    key: "entryVotes",
    label: "Entry Votes",
    value: 10,
  },
  {
    type: "number",
    key: "limit",
    label: "Results Limit",
    value: 10,
  },
];

export default configPage;
