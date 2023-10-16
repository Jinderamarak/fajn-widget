import { FC } from "react";
import { ItemText } from "../../../data/config/configPage";
import BaseInput from "./BaseInput";

type Props = {
  item: ItemText;
  onRemove: () => void;
  onChangeValue: (item: ItemText) => void;
};

const TextInput: FC<Props> = (props: Props) => {
  const { item, onRemove, onChangeValue } = props;

  const changeValue = (value: string) => {
    onChangeValue({ ...item, value });
  };

  return (
    <BaseInput refKey={item.key} label={item.label} onRemove={onRemove}>
      <input
        type="text"
        value={item.value}
        onChange={(e) => changeValue(e.target.value)}
      />
    </BaseInput>
  );
};

export default TextInput;
