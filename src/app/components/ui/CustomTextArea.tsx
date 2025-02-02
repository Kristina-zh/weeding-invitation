interface CustomTextAreaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  label,
  placeholder = "",
  value,
  onChange,
  name,
}) => {
  return (
    <div className="relative w-full">
      <label className="absolute -top-3 left-3 text-sm text-gray-600 bg-white px-1 font-nunito">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full border border-gray-300 rounded-md p-2 font-nunito text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
      />
    </div>
  );
};

export default CustomTextArea;