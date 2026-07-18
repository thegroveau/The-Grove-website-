import { useState } from 'react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="divide-y divide-sage/15 border-t border-b border-sage/15">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left"
            >
              <span className="font-display text-lg md:text-xl tracking-[2px] text-cream">
                {item.question}
              </span>
              <span className="font-display text-2xl text-clay leading-none">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <p className="font-body font-light text-sm text-cream/55 leading-relaxed pb-6 pr-8">
                {item.answer}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
