import { Link } from 'react-router-dom'

export default function AboutStrip({ image }) {
  return (
    <section className="bg-earth-2 px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <span className="font-body text-[9px] tracking-[5px] uppercase text-sage">Our Story</span>
          <h2 className="font-display text-[44px] md:text-[52px] leading-[1.05] tracking-[4px] text-cream">
            Built different. On purpose.
          </h2>
          <p className="font-body font-light text-sm text-cream/50 leading-[1.95]">
            Grove is a bespoke bodybuilding gym opening in Inner West Sydney in 2026. Old
            school iron. Cast iron plates, plate-loaded machines, the equipment serious
            athletes actually use. Surrounded by living tropical plants. A community
            capped at 400–450 members. That's it. That's the number.
          </p>
          <blockquote className="border-l-2 border-moss pl-6">
            <p className="font-accent text-[19px] text-clay">
              A grove is where things grow together. That's all this is.
            </p>
          </blockquote>
          <Link
            to="/pages/about"
            className="self-start font-body text-[10px] tracking-[2px] uppercase text-cream border-b border-moss pb-1"
          >
            Our Story →
          </Link>
        </div>

        <div className="order-1 md:order-2 aspect-[4/5] bg-near-black overflow-hidden">
          {image ? (
            <img
              src={image}
              alt="Grove training floor"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(0.1) contrast(1.05)' }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-display text-cream/10 text-[120px] tracking-[10px]">G</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
