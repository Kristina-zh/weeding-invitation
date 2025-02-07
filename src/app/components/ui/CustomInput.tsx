interface CustomInputProps {
  label: string;
  type: "text" | "email" | "tel" | "number" | "password" | "checkbox";
  placeholder?: string;
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  placeholder = "",
  value,
  onChange,
  name,
  error = false
}) => {
  const renderInput = type === "checkbox" ? (
    <input
      type={type}
      checked={typeof value === "boolean" ? value : false}
      onChange={onChange}
      name={name}
      className={`w-6 h-6 cursor-pointer`}
    />
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      value={typeof value === "string" ? value : ""}
      onChange={onChange}
      name={name}
      className={`w-full border border-gray-300 rounded-md p-2 font-nunito text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ${error ? "border-red-500" : "border-gray-300"}`}
    />
  );

  return (
    <div className="relative w-full">
      <label className={`absolute -top-3 left-3 text-sm bg-white px-1 font-nunito ${error ? "text-red-500" : "text-gray-600"}`}
      >
        {label}
      </label>
      {renderInput}
    </div>
  );
};

export default CustomInput;