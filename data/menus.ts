type Menu = {
  name: string
  url: string
  to: string
}

const menus: Array<Menu> = [
  {
    name: 'About us',
    url: '/',
    to: 'about-us',
  },
  {
    name: 'Timeline',
    url: '/',
    to: 'timeline',
  },
  {
    name: 'Prize',
    url: '/',
    to: 'prize',
  },
  {
    name: 'Solution challenge',
    url: '/',
    to: 'solution',
  },
  {
    name: 'FAQ',
    url: '/',
    to: 'faq',
  },
]

export default menus
