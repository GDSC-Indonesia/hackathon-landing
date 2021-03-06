import type { NextPage } from 'next'

import Navbar from '../components/Navbar'
import Sidenav from '../components/Sidenav'
import HeroSection from '../components/Section/HeroSection'
import { HiMenu, HiX } from 'react-icons/hi'
import { useState } from 'react'
import AboutSection from '../components/Section/AboutSection'
import PrizeSection from '../components/Section/PrizeSection'
import MediaSection from '../components/Section/MediaSection'
import FaqSection from '../components/Section/FaqSection'
import SubscribeSection from '../components/Section/SubscribeSection'
import FooterSection from '../components/Section/FooterSection'
import TimelineSection from '../components/Section/TimelineSection'
import SolutionChallengeSection from '../components/Section/SolutionChallengeSection'
import SessionsSection from '../components/Section/SessionsSection'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Navbar />
      <Sidenav open={open} />
      <div className="fixed bottom-6 right-5 z-20 lg:hidden">
        <button
          className="rounded-full bg-primary p-4 shadow-md"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <HiX color="#fff" size={24} />
          ) : (
            <HiMenu color="#fff" size={24} />
          )}
        </button>
      </div>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <PrizeSection />
      <SolutionChallengeSection />
      <SessionsSection />
      <MediaSection />
      <div className="bg-primary ">
        <FaqSection />
      </div>
      <SubscribeSection />
      <FooterSection />
    </>
  )
}

export default Home
