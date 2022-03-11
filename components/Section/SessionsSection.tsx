import React from 'react'
import sessions from '../../data/sessions'
import Container from '../Container'
import SessionItem from '../SessionItem'

const SessionsSection = () => {
  return (
    <Container as="section" className="mt-12">
      <h2 className="mb-7 text-center text-3xl font-bold text-textPrimary lg:mb-10 lg:text-4xl">
        Sessions & Tech Talk
      </h2>
      <div className="flex flex-wrap justify-center gap-20">
        {sessions.map(({ date, topic, link, time }, i) => (
          <SessionItem
            date={date}
            topic={topic}
            link={link}
            time={time}
            key={`${i}-session`}
          />
        ))}
      </div>
    </Container>
  )
}

export default SessionsSection
