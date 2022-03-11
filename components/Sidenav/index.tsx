import { Link } from 'react-scroll'
import React from 'react'
import menus from '../../data/menus'

type SidenavProps = {
  open: boolean
}

const Sidenav = ({ open }: SidenavProps) => {
  const isOpen = open ? 'opacity-100 ' : 'opacity-0 invisible'

  return (
    <nav
      className={`fixed top-0 left-0 z-10 h-screen w-screen bg-primary p-8 ${isOpen} `}
    >
      <ul className="mb-4 mt-9 flex flex-col">
        {menus.map((menu, i) => (
          <li
            key={`${i}-links`}
            className="mb-10 text-right text-2xl  text-white"
          >
            <Link to={menu.to} smooth={true} spy={true}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidenav
