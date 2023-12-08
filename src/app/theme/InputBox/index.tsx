import React from "react";

type InputProps = {
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function InputBox({ type, label, value, onChange }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
