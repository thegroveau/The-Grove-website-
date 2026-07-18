import PageHero from '../components/ui/PageHero.jsx'
import MembershipSection from '../components/sections/MembershipSection.jsx'
import PreRegisterForm from '../components/sections/PreRegisterForm.jsx'

export default function Membership() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="CHOOSE YOUR PLACE"
        sub="A community built to last. Capped at 400–450 members. Always."
      />
      <MembershipSection />
      <PreRegisterForm />
    </>
  )
}
