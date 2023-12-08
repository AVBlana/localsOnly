import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  loading = false,
  style,
}) => {
  const handleClick = () => {
    if (!disabled && !loading) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      style={{
        ...style,
        cursor: disabled || loading ? "not-allowed" : "pointer",
      }}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

export default Button;
