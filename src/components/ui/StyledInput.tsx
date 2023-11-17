import React, { InputHTMLAttributes } from "react";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

const StyledInput: React.FC<StyledInputProps> = ({
  label,
  placeholder,
  ...rest
}) => {
  return (
    <div className="mb-4 w-full max-w-xl">
      {label && (
        <label className="block text-sm font-medium text-gray-600">
          {label}
        </label>
      )}
      <input placeholder={placeholder} {...rest} />
    </div>
  );
};

export default StyledInput;
