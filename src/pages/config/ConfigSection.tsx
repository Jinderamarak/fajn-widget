import { FC, useState } from "react";
import { ConfigPageItem } from "../../data/config/configPage";
import ConfigPageInput from "./Inputs/ConfigPageInput";

type Props = {
  title: string;
  possibleItems: ConfigPageItem[];
  items: ConfigPageItem[];
  setItems: (items: ConfigPageItem[]) => void;
};

const ConfigSection: FC<Props> = (props: Props) => {
  const { title, possibleItems, items, setItems } = props;

  const [newItem, setNewItem] = useState<string>("");

  const addItem = () => {
    const item = possibleItems.find((i) => i.key === newItem);
    const exists = items.find((i) => i.key === newItem);
    if (item && !exists) {
      const newItems = [...items, item];
      setItems(newItems);
      setNewItem("");
    }
  };

  const removeItem = (item: ConfigPageItem) => {
    const newItems = items.filter((i) => i.key !== item.key);
    setItems(newItems);
  };

  const changeItem = (item: ConfigPageItem) => {
    const newItems = items.map((i) => {
      if (i.key === item.key) {
        return item;
      }
      return i;
    });
    setItems(newItems);
  };

  return (
    <>
      <h2>{title}</h2>
      <div className="params controls">
        {items.map((item) => (
          <ConfigPageInput
            key={item.key}
            item={item}
            onChangeValue={changeItem}
            onRemove={() => removeItem(item)}
          />
        ))}
      </div>
      <div className="controls">
        <div className="addition">
          <select value={newItem} onChange={(e) => setNewItem(e.target.value)}>
            {possibleItems.map((item) =>
              items.find((i) => i.key === item.key) ? undefined : (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              )
            )}
          </select>
          <button onClick={addItem}>Add</button>
        </div>
      </div>
    </>
  );
};

export default ConfigSection;
