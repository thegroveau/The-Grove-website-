export default function StatBlock({ value, label }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-4xl md:text-5xl text-clay">{value}</span>
      <span className="font-body text-[9px] tracking-[3px] uppercase text-sage/70">{label}</span>
    </div>
  )
}
