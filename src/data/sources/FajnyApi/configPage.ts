import { ConfigPageItem } from "../../config/configPage";

const configPage: ConfigPageItem[] = [
  {
    type: "text",
    key: "apiUrl",
    label: "API URL",
    value: "",
  },
  {
    type: "text",
    key: "category",
    label: "Category",
    value: "",
  },
  {
    type: "number",
    key: "limit",
    label: "Results Limit",
    value: 10,
  },
];

export default configPage;
