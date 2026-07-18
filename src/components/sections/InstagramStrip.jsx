export default function InstagramStrip() {
  return (
    <section className="bg-earth px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="text-center flex flex-col gap-2">
          <h2 className="font-display text-3xl tracking-[8px] text-cream">@THEGROVE.AU</h2>
          <p className="font-accent text-lg text-clay">Follow the build.</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-earth-2 flex items-center justify-center">
              <span className="font-display text-cream/10 text-3xl">G</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
