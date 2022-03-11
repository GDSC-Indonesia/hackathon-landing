import React from 'react'
import Container from '../Container'

const timeLines = [
  {
    name: 'Open Registration',
    date: '12 - 18 march',
  },
  {
    name: 'Opening Technical Meeting ',
    date: '19 march',
  },
  {
    name: 'Tech talk',
    date: '20 march',
  },
  {
    name: 'Deadline solution & Demo Video',
    date: '24 march',
  },
  {
    name: 'Announcement Top 10',
    date: '25 march',
  },
  {
    name: 'Showcase Top 10 & Awarding Top 3',
    date: '26 march',
  },
  {
    name: 'Mentoring Top 10',
    date: '27 march',
  },
  {
    name: 'Google Solution Challenge Submission',
    date: '28 - 30 march',
  },
]

const TimelineSection = () => {
  return (
    <Container
      as="section"
      className="flex flex-col items-center"
      id="timeline"
    >
      <h2 className="mb-7 text-3xl font-bold text-textPrimary lg:mb-10 lg:text-5xl">
        Timeline
      </h2>
      <div className="flex w-full justify-center px-4">
        <ul className="lg:flex">
          {timeLines.map((timeLine, i) => (
            <li className="group relative flex lg:flex-col" key={i}>
              <div className="lg:group-last::group-odd:border-primary mr-4 border-2 border-dashed group-last:border-none group-odd:border-secodary group-even:border-primary lg:mr-0 lg:group-last:border-dashed"></div>
              <div className="py-7 ">
                <div className="lg: absolute -left-2 top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full group-odd:bg-secodary group-even:bg-primary lg:-top-2">
                  <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
                </div>
                <div className="-mt-4 pr-5 lg:mt-0 lg:text-center">
                  <p className="font-bold">{timeLine.name}</p>
                  <span>{timeLine.date}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default TimelineSection
