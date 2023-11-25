import React from "react";

type FormInputFileProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  register?: any;
};

const FormInputFile: React.FC<FormInputFileProps> = ({
  id,
  name,
  label,
  required,
  register,
}) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}

        {required && <span className="text-red-600"> *</span>}
      </label>
      <input
        className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id={id}
        type="file"
        {...register(id, { required })}
      />
    </div>
  );
};

export default FormInputFile;
