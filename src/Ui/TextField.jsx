export default function TextField({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  errors,
  validationSchema,
}) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-secondary-700 text-sm" htmlFor={name}>
        {label}
        {required && <span className="text-error">*</span>}
      </label>

      <input
        id={name}
        type={type}
        value={value}
        onChange={onChange} // استفاده از onChange
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-gray-700"
        autoComplete="off"
        {...validationSchema} // اعتبارسنجی
      />

      {errors && errors[name] && (
        <span className="text-error block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
