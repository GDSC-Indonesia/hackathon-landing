import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import SectionImage from '../../assets/section-image-3.png'

const SolutionChallengeSection = () => {
  return (
    <Container
      as="section"
      className=" flex flex-col items-center justify-center  lg:flex-row lg:py-28"
      id="solution"
    >
      <div className="flex items-center justify-center lg:w-1/2 ">
        <Image src={SectionImage} width={421} height={226} />
      </div>
      <div className="mx-16 mt-9 lg:mt-0 lg:w-1/2">
        <h2 className="mb-7 text-center text-3xl font-bold text-textPrimary lg:mb-10 lg:text-left lg:text-4xl">
          What is solution <br className="md:hidden" /> challenge ?
        </h2>
        <p className="mt-2 leading-relaxed">
          The Solution Challenge is an annual contest presented by Google that
          invites students to develop solutions for local community problems
          using one or more Google products or platforms.
          <br /> Created by the United Nations in 2015, with support from all{' '}
          193 United Nations Member States, the 17 Sustainable Development Goals
          aim to end poverty, ensure prosperity, and protect the planet.
        </p>
      </div>
    </Container>
  )
}

export default SolutionChallengeSection
