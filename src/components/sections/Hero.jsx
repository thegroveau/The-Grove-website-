import Button from '../ui/Button.jsx'

export default function Hero({ image }) {
  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center text-center px-6 bg-earth bg-cover bg-center"
      style={
        image
          ? { backgroundImage: `linear-gradient(rgba(20,20,16,0.52), rgba(20,20,16,0.52)), url(${image})` }
          : undefined
      }
    >
      {!image && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(61,74,46,0.25), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(122,140,106,0.12), transparent 55%)',
          }}
        />
      )}

      <div className="relative flex flex-col items-center gap-6 max-w-2xl">
        <h1
          className="font-display text-cream leading-none"
          style={{
            fontSize: 'clamp(72px, 16vw, 180px)',
            letterSpacing: 'clamp(18px, 4vw, 48px)',
          }}
        >
          GROVE
        </h1>

        <span className="w-[100px] h-[2px] bg-moss" />

        <p className="font-accent text-xl text-clay">Iron &amp; Root · Sydney</p>

        <p className="font-body font-light text-sm text-cream/55 max-w-md">
          Old school iron. Living plants. A community built to last.
        </p>

        <div className="flex flex-col xs:flex-row items-center gap-4 mt-2">
          <Button to="/pages/membership" variant="primary">
            Secure Your Spot
          </Button>
          <Button to="/collections/all" variant="secondary">
            Shop Grove
          </Button>
        </div>
      </div>
    </section>
  )
}
