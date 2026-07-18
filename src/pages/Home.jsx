import Hero from '../components/sections/Hero.jsx'
import FoundingBanner from '../components/sections/FoundingBanner.jsx'
import CollectionsGrid from '../components/sections/CollectionsGrid.jsx'
import AboutStrip from '../components/sections/AboutStrip.jsx'
import FeaturedProducts from '../components/sections/FeaturedProducts.jsx'
import MembershipSection from '../components/sections/MembershipSection.jsx'
import PreRegisterForm from '../components/sections/PreRegisterForm.jsx'
import ApparelDrop from '../components/sections/ApparelDrop.jsx'
import TrainingCamps from '../components/sections/TrainingCamps.jsx'
import InstagramStrip from '../components/sections/InstagramStrip.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <FoundingBanner />
      <CollectionsGrid />
      <AboutStrip />
      <FeaturedProducts />
      <MembershipSection />
      <PreRegisterForm />
      <ApparelDrop />
      <TrainingCamps />
      <InstagramStrip />
    </>
  )
}
