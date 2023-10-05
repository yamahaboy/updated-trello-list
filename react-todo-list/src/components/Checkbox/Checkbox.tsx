import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
}: CheckboxProps) => {
  const handleCheckboxChange = () => {
    onChange(!checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};
