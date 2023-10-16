import { FC } from "react";
import { ItemToggle } from "../../../data/config/configPage";
import BaseInput from "./BaseInput";

type Props = {
  item: ItemToggle;
  onRemove: () => void;
  onChangeValue: (item: ItemToggle) => void;
};

const ToggleInput: FC<Props> = (props: Props) => {
  const { item, onRemove, onChangeValue } = props;

  const changeValue = (value: boolean) => {
    onChangeValue({ ...item, value });
  };

  return (
    <BaseInput refKey={item.key} label={item.label} onRemove={onRemove}>
      <input
        type="checkbox"
        checked={item.value}
        onChange={(e) => changeValue(e.target.checked)}
      />
    </BaseInput>
  );
};

export default ToggleInput;
