import React from "react";

interface FormInputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  pattern?: string;
  onChange?: (value: string) => void; // Add onChange prop
  register?: any;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  id,
  placeholder,
  label,
  required,
  pattern,
  register,
}) => {
  const isCheckbox = type === "checkbox";

  return (
    <div className="relative z-0 w-full mb-6 group">
      {isCheckbox ? (
        <div className="flex items-center">
          <input
            id={id}
            type={type}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            {...register(name, { required })}
          />
          <label
            htmlFor={id}
            className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
          >
            {label}
          </label>
        </div>
      ) : (
        <>
          <input
            type={type}
            id={id}
            className="block py-2.5 px-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder={placeholder || " "}
            pattern={pattern}
            {...register(name, { required })}
          />
          <label
            htmlFor={id}
            className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ${
              required ? "peer-focus:left-0 peer-focus:text-blue-600" : ""
            } peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            {label} {required && <span className="text-red-600">*</span>}
          </label>
        </>
      )}
    </div>
  );
};

export default FormInput;
