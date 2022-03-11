import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import SectionImage from '../../assets/section-image-2.png'
import CheckImage from '../../assets/cheklist.png'
import Champions from '../icons/Champions'

const benefits = [
  'Mentorships from experts',
  'GiftSet, google nest, and cash prizest',
  'Feedback and inputs  from professional judges',
]

const PrizeSection = () => {
  return (
    <Container
      as="section"
      className="lg:flex lg:items-center lg:justify-between lg:pt-24"
      id="prize"
    >
      <div className="relative flex flex-col items-center justify-center lg:order-2 lg:w-1/2">
        <Image src={SectionImage} width={399} height={508} />
        <div className="absolute -bottom-2 right-12 flex w-[250px]  items-center rounded-xl bg-white py-3 px-6 text-black shadow-md lg:right-8">
          <Champions />
          <div className="ml-5 flex flex-col ">
            <span>Total prize</span>
            <span className="text-xl font-bold">IDR 40.000.000</span>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center lg:order-1  lg:items-start">
        <h2 className="mb-2 text-3xl font-bold text-textPrimary lg:mb-6 lg:text-5xl">
          Prizes & Benefits
        </h2>
        <p className="mb-2 text-black lg:mb-8 lg:text-2xl">
          The benefits you will get if you win
        </p>
        <ul className=" text-black">
          {benefits.map((benefit, i) => (
            <li
              className="my-3 flex w-[310px] items-center lg:w-[400px] "
              key={`${i}-benefits`}
            >
              <Image
                src={CheckImage}
                alt="Checklist"
                className="w-full shrink-0"
              />
              <p
                className="ml-3 break-words text-sm font-semibold lg:text-base"
                dangerouslySetInnerHTML={{ __html: benefit }}
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default PrizeSection
