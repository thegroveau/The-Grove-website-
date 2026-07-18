export default function FormSelect({ label, name, options, required, className = '', ...props }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <span className="font-body text-[9px] tracking-[3px] uppercase text-cream/50">
          {label}
          {required && ' *'}
        </span>
      )}
      <select
        name={name}
        required={required}
        className="bg-earth border border-sage/20 text-cream font-body font-light text-sm px-4 py-3 focus:outline-none focus:border-sage/60"
        {...props}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt.value ?? opt} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </option>
        ))}
      </select>
    </label>
  )
}
