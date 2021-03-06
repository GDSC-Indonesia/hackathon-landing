import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import Button from '../Buttons'
import Countdown from '../Countdown'
import HeroImage from '../../assets/hero-image.png'

const HeroSection = () => {
  return (
    <Container
      as="section"
      className="grid grid-cols-1 grid-rows-[1fr_250px_150px] lg:mt-4 lg:grid-cols-2 lg:grid-rows-[1fr_150px]"
    >
      <div className="flex justify-center lg:order-2">
        <Image src={HeroImage} alt="Hero image" objectFit="cover" />
      </div>
      <div className="mt-6 flex flex-col items-center lg:order-1 lg:row-span-2  lg:items-start z-20">
        <div>
          <h1 className="text-center text-3xl font-bold text-textPrimary lg:text-left lg:text-6xl">
            GDSC <br className="md:hidden lg:block" /> Hackfest <br /> Indonesia
          </h1>
          <div className="mt-4">
            <p className="w-[223px] text-center text-sm lg:w-[338px] lg:text-left lg:text-lg">
              Register your team now and have the chance of winning 
              one of the most prestigious hackathon events in Indonesia!
            </p>
          </div>
        </div>
        <div className="mt-7 flex gap-3 lg:mt-[80px]">
          <a
            href="https://forms.gle/LTp2AfiusgfstiqJA"
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-xl border-2 border-secodary bg-secodary px-4 py-[10px] text-center text-white transition-all hover:bg-[#ED8E00] hover:shadow-md lg:px-6 lg:py-[15px]"
          >
            Apply
          </a>
          <a
            href="/Guide-Book-Hackfest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-xl border-2 border-secodary px-4 py-[10px] text-center text-secodary transition-all hover:bg-secodary hover:text-white hover:shadow-md lg:px-6 lg:py-[15px]"
          >
            Download Guidebook
          </a>
        </div>
      </div>
      <div className=" lg:relative lg:order-3">
        <Countdown className="-top-24 w-[100%] shadow-md lg:absolute" />
      </div>
    </Container>
  )
}

export default HeroSection
