import { FC } from "react";
import { ItemNumber } from "../../../data/config/configPage";
import BaseInput from "./BaseInput";

type Props = {
  item: ItemNumber;
  onRemove: () => void;
  onChangeValue: (item: ItemNumber) => void;
};

const NumberInput: FC<Props> = (props: Props) => {
  const { item, onRemove, onChangeValue } = props;

  const changeValue = (value: number) => {
    onChangeValue({ ...item, value });
  };

  return (
    <BaseInput refKey={item.key} label={item.label} onRemove={onRemove}>
      <input
        type="number"
        value={item.value}
        onChange={(e) => changeValue(Number(e.target.value))}
      />
    </BaseInput>
  );
};

export default NumberInput;
