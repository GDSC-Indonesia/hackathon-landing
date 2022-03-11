import React from 'react'
import Image from 'next/image'
import Container from '../Container'
import DscLogo from '../../assets/logo.png'
import { GrYoutube, GrFacebook, GrInstagram } from 'react-icons/gr'

const FooterSection = () => {
  return (
    <Container as="footer" className="mt-10 flex flex-col items-center py-16">
      <Image src={DscLogo} width={300} height={150} />
      <div className="mt-10 flex w-1/2 justify-between lg:w-1/6">
        <a
          href=" https://www.youtube.com/channel/UCpSv2Al-xgyHEnyqkCUq1kg"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GrYoutube color="#405274" size={20} />
        </a>
        <a
          href="https://www.facebook.com/dscindonesia/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GrFacebook color="#405274" size={20} />
        </a>
        <a
          href="https://www.instagram.com/gdscindonesia/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GrInstagram color="#405274" size={20} />
        </a>
      </div>
    </Container>
  )
}

export default FooterSection
