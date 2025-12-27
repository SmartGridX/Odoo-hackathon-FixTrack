
export const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  icon,
  rightIcon,
  onKeyPress
}) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className={`w-full ${icon ? 'pl-10' : 'pl-4'} ${rightIcon ? 'pr-12' : 'pr-4'} py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900`}
        placeholder={placeholder}
      />
      {rightIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {rightIcon}
        </div>
      )}
    </div>
  );
};