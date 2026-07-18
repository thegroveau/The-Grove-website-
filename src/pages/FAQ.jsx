import PageHero from '../components/ui/PageHero.jsx'
import Accordion from '../components/ui/Accordion.jsx'

const SECTIONS = [
  {
    title: 'Membership',
    items: [
      {
        question: 'What does founding membership actually lock in?',
        answer:
          'Your rate. $55 a week, forever — it never increases, even after we open to the public. There are only 50 founding spots, ever.',
      },
      {
        question: 'When does Grove open?',
        answer: 'Inner West Sydney, 2026. Founding members get soft-open access before the public launch.',
      },
      {
        question: 'Is there a lock-in contract?',
        answer: 'No. Standard membership is month to month — cancel anytime. Founding membership locks your rate, not your commitment.',
      },
      {
        question: 'How many members will Grove have?',
        answer: 'Capped at 400–450. That\'s the number. Always. We\'re not building for scale — we\'re building for a community that actually works out together.',
      },
    ],
  },
  {
    title: 'Supplements',
    items: [
      {
        question: 'What brand does Grove stock?',
        answer: 'Emrald Labs. We don\'t stock everything — just what works, and what we actually use ourselves.',
      },
      {
        question: 'Do members get a discount?',
        answer: 'Yes. Founding members get 20% off all Grove supplements and apparel. Standard members get 10% off.',
      },
      {
        question: 'Can I buy supplements without a membership?',
        answer: 'Yes — everything in the shop is available to anyone, member or not.',
      },
    ],
  },
  {
    title: 'Training Camps',
    items: [
      {
        question: 'How many people are in a training camp?',
        answer: '12 maximum. Small enough that the coaching is real, not performative.',
      },
      {
        question: 'What\'s included in the Full Experience package?',
        answer: 'Training, content capture, nutrition and recovery guidance, and a Grove apparel pack — everything in one.',
      },
      {
        question: 'Do I need to be a Grove member to join a camp?',
        answer: 'No. Training camps are open to anyone, though Grove members get priority booking.',
      },
    ],
  },
  {
    title: 'Apparel',
    items: [
      {
        question: 'Will Drop 01 be restocked?',
        answer: 'No. Limited means limited — once it\'s gone, it\'s gone.',
      },
      {
        question: 'What sizes are available?',
        answer: 'S through XXL across the Drop 01 range.',
      },
    ],
  },
]

export default function FAQ() {
  return (
    <>
      <PageHero eyebrow="Questions" title="FAQ" />
      <section className="bg-earth px-6 md:px-10 py-20">
        <div className="max-w-2xl mx-auto flex flex-col gap-14">
          {SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              <h2 className="font-display text-2xl tracking-[4px] text-clay">{section.title.toUpperCase()}</h2>
              <Accordion items={section.items} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
