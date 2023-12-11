import React from "react";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
  const handleCheckboxChange = () => {
    onChange(!checked);
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        id={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
