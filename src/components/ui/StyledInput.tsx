import React, { InputHTMLAttributes, ChangeEvent } from "react";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  onChange: (value: any) => void;
}

const StyledInput: React.FC<StyledInputProps> = ({
  label,
  placeholder,
  onChange,
  ...rest
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-4 w-full max-w-xl">
      {label && (
        <label className="block text-sm font-medium text-gray-600">
          {label}
        </label>
      )}
      <input placeholder={placeholder} onChange={handleChange} {...rest} />
    </div>
  );
};

export default StyledInput;
