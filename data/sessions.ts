type Session = {
  topic: string
  date: string
  time: string
  link?: {
    youtube: string
    calendar?: string
  }
}

const sessions: Array<Session> = [
  {
    topic: 'Opening & Technical Meeting',
    date: '19 March 2022',
    time: '13:00 - 15:00',
    link: {
      youtube: 'https://www.youtube.com/channel/UCpSv2Al-xgyHEnyqkCUq1kg',
      calendar: 'https://s.id/-ZQnD',
    },
  },
  {
    topic: 'Design Thinking for Idea Validation',
    date: '20 March 2022',
    time: '10:15 - 11:15 ',
    link: {
      youtube: 'https://www.youtube.com/channel/UCpSv2Al-xgyHEnyqkCUq1kg',
      calendar: 'https://s.id/10LHU',
    },
  },
  {
    topic: 'Sharing Session with GSC Winner',
    date: '20 March 2022',
    time: '11:35 - 12:35',
    link: {
      youtube: 'https://www.youtube.com/channel/UCpSv2Al-xgyHEnyqkCUq1kg',
      calendar: 'https://s.id/10LHw',
    },
  },
  {
    topic: 'Delivering Awesome Pitch',
    date: '20 March 2022',
    time: '13:20 - 14:20',
    link: {
      youtube: 'https://www.youtube.com/channel/UCpSv2Al-xgyHEnyqkCUq1kg',
      calendar: 'https://s.id/10LHk',
    },
  },
  {
    topic: 'Showcase Top 10 & Awarding Top 3',
    date: '26 March 2022 ',
    time: '13:00 - 15:30',
    link: {
      youtube: 'https://www.youtube.com/channel/UCpSv2Al-xgyHEnyqkCUq1kg',
      calendar: 'https://s.id/-ZQtA',
    },
  },
]

export default sessions
export type { Session }
