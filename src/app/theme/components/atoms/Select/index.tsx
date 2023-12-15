import React, { useCallback } from "react";

interface Props<DataType> {
  label: string;
  items: Array<DataType>;
  value: string;
  labelExtractor: (item: DataType) => string;
  valueExtractor: (item: DataType) => string;
  onValueChange: (value: string, selectedItem: DataType) => void;
}

const DynamicSelect = <DataType,>({
  label,
  items,
  value,
  onValueChange,
  labelExtractor,
  valueExtractor,
}: Props<DataType>) => {
  const handleOnValueChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const {
        target: { value: selectedValue },
      } = event;

      const item = items.find((i) => valueExtractor(i) === selectedValue);

      if (!item) return;

      onValueChange(selectedValue, item!);
    },
    [items]
  );
  return (
    <>
      <label>
        <span>{label}</span>
        <select value={value} onChange={handleOnValueChange}>
          {items.map((item, index) => {
            const itemLabel = labelExtractor(item);
            const itemValue = valueExtractor(item);
            return (
              <option key={index} value={itemValue}>
                {itemLabel}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
};

export { DynamicSelect };
