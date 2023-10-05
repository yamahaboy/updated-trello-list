import "./InputText.css";

interface IProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({ placeholder, value, onChange }: IProps) => {
  return (
    <input
      className="input-text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
