import { FC } from "react";
import { ConfigPageItem } from "../../../data/config/configPage";
import ToggleInput from "./ToggleInput";
import SelectInput from "./SelectInput";
import NumberInput from "./NumberInput";
import ColorInput from "./ColorInput";
import TextInput from "./TextInput";

type Props = {
  item: ConfigPageItem;
  onRemove: () => void;
  onChangeValue: (item: ConfigPageItem) => void;
};

const ConfigPageInput: FC<Props> = (props: Props) => {
  const { item, onRemove, onChangeValue } = props;

  switch (item.type) {
    case "toggle":
      return (
        <ToggleInput
          item={item}
          onRemove={onRemove}
          onChangeValue={onChangeValue}
        />
      );
    case "select":
      return (
        <SelectInput
          item={item}
          onRemove={onRemove}
          onChangeValue={onChangeValue}
        />
      );
    case "number":
      return (
        <NumberInput
          item={item}
          onRemove={onRemove}
          onChangeValue={onChangeValue}
        />
      );
    case "color":
      return (
        <ColorInput
          item={item}
          onRemove={onRemove}
          onChangeValue={onChangeValue}
        />
      );
    case "text":
      return (
        <TextInput
          item={item}
          onRemove={onRemove}
          onChangeValue={onChangeValue}
        />
      );
    default:
      return <p>Input type not found: {JSON.stringify(item)}</p>;
  }
};

export default ConfigPageInput;
