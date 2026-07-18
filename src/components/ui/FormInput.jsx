export default function FormInput({ label, name, type = 'text', required, className = '', ...props }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <span className="font-body text-[9px] tracking-[3px] uppercase text-cream/50">
          {label}
          {required && ' *'}
        </span>
      )}
      <input
        name={name}
        type={type}
        required={required}
        className="bg-earth border border-sage/20 text-cream font-body font-light text-sm px-4 py-3 focus:outline-none focus:border-sage/60 placeholder:text-cream/25"
        {...props}
      />
    </label>
  )
}
