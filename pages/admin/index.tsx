import { GetServerSideProps, NextPage, GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import React from 'react'
import Container from '../../components/Container'
import LogoDsc from '../../assets/logo.svg'
import DropdownMenu from '../../components/DropdownMenu'
import Link from 'next/link'
import nookies from 'nookies'

const timeLines = [
  {
    name: 'Pembukaan pendaftaran',
    date: '5 Maret 2022',
    konten: 'Daftarkan tim anda untuk mengikuti Hackfest GDSC Indonesia',
    link: '/admin/registrasi-tim',
  },
  {
    name: 'Penutupan pendaftaran',
    date: '18 Maret 2022',
  },
  {
    name: 'Pembukaan dan Technical Meeting',
    date: '19 Maret 2022',
    konten:
      'Pembukaan Hackfest GDSC Indonesia dan Pembahasan mengenai rule hackathon.',
  },
  {
    name: 'Webinar TechTalk',
    date: '20 Maret 2022',
    konten: 'Webinar tech mengenai Hacker, Hustler, dan Hipster.',
  },
  {
    name: 'Hari pertama sesi mentoring one-on-one',
    date: '21 Maret 2022',
  },
  {
    name: 'Hari terakhir sesi mentoring one-on-one & Tenggat waktu pengumpulan solution video',
    date: '25 Maret 2022',
  },
  {
    name: 'Penghargaan Top 10 dan Top 5',
    date: '26 Maret 2022',
  },
  {
    name: 'Showcase Top 5',
    date: '27 Maret 2022',
  },
  {
    name: 'Controlling peserta GSC',
    date: '28 Maret 2022',
  },
]

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx)

  if (!cookies.token) {
    return {
      redirect: {
        destination: '/login',
      },
    }
  }
  return {
    props: {},
  }
}

const AdminHome: NextPage = () => {
  return (
    <Container as="main">
      <div className="flex w-full justify-between">
        <Image src={LogoDsc} />
        <DropdownMenu />
      </div>
      <div className="flex">
        <div className="lg:w-1/4"></div>
        {/* Timeline */}
        <div className="flex flex-col lg:w-3/4">
          <h1 className="before:contents-[''] flex before:mr-3 before:h-full before:w-[7px] before:rounded before:bg-secodary">
            Checkpoint
          </h1>
          <ol className="relative mt-10 border-l border-secodary">
            {timeLines.map((timeLine, i) => (
              <li className="mb-10 ml-4" key={i}>
                <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-secodary bg-secodary"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {timeLine.date}
                </time>
                <h3 className="text-lg font-semibold text-gray-900">
                  {timeLine.name}
                </h3>
                {timeLine.konten && (
                  <p className="mb-4 text-base font-normal text-gray-500 ">
                    {timeLine.konten}
                  </p>
                )}
                {timeLine.link && (
                  <Link href={timeLine.link} passHref>
                    <a className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100  ">
                      Daftar tim
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Container>
  )
}

export default AdminHome
