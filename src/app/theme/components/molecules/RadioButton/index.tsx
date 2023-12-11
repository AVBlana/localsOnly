import React from "react";

type RadioProps = {
  label: string;
  value: string | null;
  onChange: (value: string) => void;
};

export function RadioButton({ label, value, onChange }: RadioProps) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <input
        type="radio"
        value={label}
        id={label}
        checked={value === label}
        onChange={() => onChange(label)}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
