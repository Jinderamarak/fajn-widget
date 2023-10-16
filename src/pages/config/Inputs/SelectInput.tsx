import { FC } from "react";
import { ItemSelect } from "../../../data/config/configPage";
import BaseInput from "./BaseInput";

type Props = {
  item: ItemSelect;
  onRemove: () => void;
  onChangeValue: (item: ItemSelect) => void;
};

const SelectInput: FC<Props> = (props: Props) => {
  const { item, onRemove, onChangeValue } = props;

  const changeValue = (value: string) => {
    onChangeValue({ ...item, value });
  };

  return (
    <BaseInput refKey={item.key} label={item.label} onRemove={onRemove}>
      <select value={item.value} onChange={(e) => changeValue(e.target.value)}>
        {item.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </BaseInput>
  );
};

export default SelectInput;
