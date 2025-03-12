export default function Select({ value, onChange, options }) {
    return (
      <div className="mb-6">
        <select
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-gray-700"
        >
          <option value="" disabled hidden>
            انتخاب کنید
          </option>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  