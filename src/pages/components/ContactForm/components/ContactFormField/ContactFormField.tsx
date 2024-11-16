import React from "react";
import "./ContactFormField.css";

interface OptionProps {
  value: string;
  label: string;
}

interface ContactFormFieldProps {
  label: string;
  id: string;
  type: "input" | "select";
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  required?: boolean;
  options?: OptionProps[];
  error?: string;
}

const ContactFormField: React.FC<ContactFormFieldProps> = ({
  label,
  id,
  type,
  value,
  onChange,
  required = false,
  options = [],
  error = "",
}) => {
  const inputClassName = error ? "contact-form-field__input--error" : "";

  return (
    <div className="contact-form-field">
      <label htmlFor={id}>{label}:</label>
      {type === "input" ? (
        <input
          className={inputClassName}
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <select id={id} value={value} onChange={onChange} required={required}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      <span className="contact-form-field__error">{error}</span>
    </div>
  );
};

export default ContactFormField;
