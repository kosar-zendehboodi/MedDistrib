export default function RHFSelect({
    options, register, name, label, required
}) {
    return (
        <div>
        <label className="mb-2 block text-secondary-700 whitespace-nowrap">
          {label} {required && <span className="text-error">*</span>}
        </label>
        <select {...register(name)} className="textField__input">
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
}