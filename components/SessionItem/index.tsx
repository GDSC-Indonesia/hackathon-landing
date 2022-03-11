import React from 'react'
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi'
import type { Session } from '../../data/sessions'

const SessionItem = ({ date, topic, link, time }: Session) => {
  return (
    <div className="jus flex h-[300px] w-[300px] flex-col  rounded-lg bg-white p-5 shadow">
      <div className="mb-3">
        <span className="text-sm">Topic</span>
        <p className="text-2xl font-semibold">{topic}</p>
      </div>
      <div className="my-2 mb-4 flex gap-3 text-[#9E9E9E]">
        <div className="flex items-center">
          <HiOutlineCalendar className="mr-2" />
          <span className="text-xs">{date}</span>
        </div>
        <div className=" flex items-center">
          <HiOutlineClock className="mr-2" />
          <span className="text-xs">{time}</span>
        </div>
      </div>
      <div className="flex h-full flex-col justify-center gap-4">
        {link ? (
          <>
            <a
              href={link.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-xl border-2 border-secodary bg-secodary px-4 py-[10px] text-center text-white transition-all hover:bg-[#ED8E00] hover:shadow-md lg:px-6 lg:py-[10px]"
            >
              Watch Session
            </a>
            <a
              href={link.calendar}
              rel="noopener noreferrer"
              className="cursor-pointer rounded-xl border-2 border-secodary px-4 py-[10px] text-center text-secodary transition-all hover:bg-secodary hover:text-white hover:shadow-md lg:px-6 lg:py-[10px]"
            >
              Add to Calendar
            </a>
          </>
        ) : (
          <div className="rounded-lg bg-slate-200 p-5 text-center">
            <span> Comming soon </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default SessionItem
