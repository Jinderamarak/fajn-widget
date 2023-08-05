import { FC } from "react";
import { ItemColor } from "../../../data/config/configPage";
import BaseInput from "./BaseInput";

type Props = {
  item: ItemColor;
  onRemove: () => void;
  onChangeValue: (item: ItemColor) => void;
};

const ColorInput: FC<Props> = (props: Props) => {
  const { item, onRemove, onChangeValue } = props;

  const changeValue = (value: string) => {
    onChangeValue({ ...item, value });
  };

  return (
    <BaseInput refKey={item.key} label={item.label} onRemove={onRemove}>
      <input
        type="color"
        value={item.value}
        onChange={(e) => changeValue(e.target.value)}
      />
    </BaseInput>
  );
};

export default ColorInput;
