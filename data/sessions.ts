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
    time: '07:00 - 08:00 PM',
    // Uncommnet code di bawah untuk isi link youtube atau calender
    // jika di isi otomatis akan tombol link akan muncul
    // link: {
    //   youtube: '#',
    //   calendar: '#',
    // },
  },
  {
    topic: 'Design Thinking for Idea Validation',
    date: '20 March 2022',
    time: '07:00 - 08:00 PM',
  },
  {
    topic: 'Sharing Sessions with Winner GSC ',
    date: '19 March 2022',
    time: '07:00 - 08:00 PM',
  },
  {
    topic: 'Pitching for Desk',
    date: '19 March 2022',
    time: '07:00 - 08:00 PM',
  },
  {
    topic: 'Showcase Top 10 & Awarding Top 3',
    date: '19 March 2022',
    time: '07:00 - 08:00 PM',
  },
]

export default sessions
export type { Session }
