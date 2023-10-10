import React from "react";
import { StyledChecbox } from "./styles";

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
      <StyledChecbox
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};
