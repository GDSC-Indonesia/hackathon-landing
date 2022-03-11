import { Link } from 'react-scroll'
import React, { useEffect, useState } from 'react'
import menus from '../../data/menus'
import Logo from '../icons/Logo'

const Navbar = () => {
  const [changeColor, setChangeColor] = useState(false)
  const changeColorNavbar = () => {
    if (window.scrollY >= 80) setChangeColor(true)
    else setChangeColor(false)
  }

  useEffect(function mount() {
    window.addEventListener('scroll', changeColorNavbar)

    return function unMount() {
      window.removeEventListener('scroll', changeColorNavbar)
    }
  }, [])

  return (
    <header
      className={` ${
        changeColor && 'lg:bg-white lg:shadow-md '
      } lg:sticky lg:top-0 lg:z-50`}
    >
      <nav
        className={` lg:px-20" container  mx-auto mt-2 flex w-full flex-col px-16 pt-8 pb-2  lg:mt-7 lg:h-auto lg:flex-row lg:justify-between`}
      >
        <a className="h-[24px] self-center lg:self-auto " href="/">
          <Logo />
        </a>

        <div className="hidden flex-row justify-between lg:flex">
          <ul className="mb-4 flex flex-row ">
            {menus.map((menu, i) => (
              <li key={`${i}-links`} className=" lg:ml-7">
                <Link
                  to={menu.to}
                  smooth={true}
                  spy={true}
                  className=" cursor-pointer text-right text-primary transition-all hover:border-b-2 hover:border-b-primary lg:text-lg"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
            <li className="ml-7">
              <a
                href="https://t.me/+Jv10TkazL2QxYzJl"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer rounded-xl border-2 border-primary px-4 py-[10px] text-primary transition-all hover:bg-primary hover:text-white hover:shadow-md lg:px-6 lg:py-[15px]"
              >
                Join Forum Discussion
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
