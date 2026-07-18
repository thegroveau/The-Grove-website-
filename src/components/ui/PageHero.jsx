export default function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="bg-earth px-6 md:px-10 pt-20 pb-16 border-b border-moss/15 text-center flex flex-col items-center gap-4">
      {eyebrow && (
        <span className="font-body text-[9px] tracking-[5px] uppercase text-sage">{eyebrow}</span>
      )}
      <h1 className="font-display text-[52px] md:text-[72px] tracking-[6px] text-cream leading-none">
        {title}
      </h1>
      {sub && <p className="font-accent text-lg text-clay max-w-lg">{sub}</p>}
    </section>
  )
}
