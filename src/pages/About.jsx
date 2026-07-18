import PageHero from '../components/ui/PageHero.jsx'
import Button from '../components/ui/Button.jsx'

export default function About() {
  return (
    <>
      <PageHero eyebrow="Since Day One" title="OUR STORY" sub="Iron & Root · Sydney" />

      <section className="bg-earth px-6 md:px-10 py-20">
        <div className="max-w-2xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <span className="font-body text-[9px] tracking-[5px] uppercase text-sage">Jim's Story</span>
            <p className="font-body font-light text-[15px] text-cream/70 leading-[1.9]">
              Grove was founded by Jim Thornton and Charlie Foat. Jim grew up in England.
              He moved out at 15. Started an apprenticeship at 16. At 20, he moved to
              Australia alone.
            </p>
            <p className="font-body font-light text-[15px] text-cream/70 leading-[1.9]">
              He's competed 12 times. Lost 8. Came second twice. Won 3 consecutive
              Australian National Championships.
            </p>
            <blockquote className="border-l-2 border-moss pl-6">
              <p className="font-accent text-xl text-clay leading-relaxed">
                Grove is his most meaningful achievement — because it was built for
                others, not himself.
              </p>
            </blockquote>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-body text-[9px] tracking-[5px] uppercase text-sage">Supplements</span>
            <h2 className="font-display text-3xl tracking-[3px] text-cream">
              We don't make supplements. We select them.
            </h2>
            <p className="font-body font-light text-[15px] text-cream/60 leading-[1.9]">
              Everything on the shelf at Grove is stocked because we use it ourselves.
              Emrald Labs. Nothing else. No filler brands, no shelf-space deals — just
              what works.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-body text-[9px] tracking-[5px] uppercase text-sage">The Gym</span>
            <h2 className="font-display text-3xl tracking-[3px] text-cream">
              Opening Inner West Sydney · 2026
            </h2>
            <p className="font-body font-light text-[15px] text-cream/60 leading-[1.9]">
              Old school iron. Cast iron plates, plate-loaded machines — the equipment
              serious athletes actually use. Surrounded by living tropical plants. A
              community capped at 400–450 members. That's the number. Always.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 pt-6 border-t border-moss/15 text-center">
            <p className="font-accent text-lg text-clay">Romans 8:18</p>
            <Button to="/pages/membership" variant="primary">
              Secure Your Spot
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
