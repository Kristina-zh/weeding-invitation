interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  name: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange, label, name }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={handleCheckboxChange}
        name={name}
      />
      <span
        className={`w-6 h-6 mr-3 flex items-center justify-center border-2 rounded transition-all duration-300 ${checked
          ? "bg-blue-600 border-blue-600"
          : "bg-white border-gray-400 hover:border-gray-600"
          }`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </span>
      {label && <span className="text-gray-800 font-nunito">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;