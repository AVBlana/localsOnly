import React from "react";

type DynamicTextAreaProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export function DynamicTextArea({
  placeholder,
  value,
  onChange,
}: DynamicTextAreaProps) {
  const calculateRowsAndCols = (text: string) => {
    const lines = text.split("\n");
    const maxCols = Math.max(...lines.map((line) => line.length));
    const numRows = lines.length;
    return {
      rows: numRows + 1,
      cols: Math.max(maxCols, 20),
    };
  };

  const { rows, cols } = calculateRowsAndCols(value);

  return (
    <div>
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
