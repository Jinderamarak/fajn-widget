import { ConfigPageItem } from "../../config/configPage";

const configPage: ConfigPageItem[] = [
  {
    type: "text",
    key: "apiUrl",
    label: "API URL",
    default: "",
  },
  {
    type: "text",
    key: "category",
    label: "Category",
    default: "",
  },
  {
    type: "number",
    key: "limit",
    label: "Results Limit",
    default: 10,
  },
];

export default configPage;
