type InputFieldProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  type?: string;
};

export default function InputField({
  value,
  onChange = () => {},
  className = '',
  type,
}: InputFieldProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    />
  );
}
