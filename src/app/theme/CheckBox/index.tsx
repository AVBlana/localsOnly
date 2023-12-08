import React from "react";

type CheckboxProps = {
  name: string;
  items: { value: string; label: string }[];
  checkedItems: string[];
  onChange: (values: string[]) => void;
};

export function CheckboxGroup({
  name,
  items,
  checkedItems,
  onChange,
}: CheckboxProps) {
  const handleCheckboxChange = (itemValue: string) => {
    const updatedItems = checkedItems.includes(itemValue)
      ? checkedItems.filter((value) => value !== itemValue)
      : [...checkedItems, itemValue];

    onChange(updatedItems);
  };

  return (
    <>
      {items.map((item) => (
        <div key={item.value}>
          <input
            name={name}
            type="checkbox"
            value={item.value}
            id={name + item.value}
            checked={checkedItems.includes(item.value)}
            onChange={() => handleCheckboxChange(item.value)}
          />
          <label htmlFor={name + item.value}>{item.label}</label>
        </div>
      ))}
    </>
  );
}
