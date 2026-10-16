export default function FormInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = true,
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200
          bg-slate-50 px-4 py-3 text-sm text-slate-800
          outline-none transition placeholder:text-slate-400
          focus:border-violet-500 focus:bg-white
          focus:ring-4 focus:ring-violet-100"
      />
    </div>
  );
}