import { Link } from 'react-scroll'
import React from 'react'
import menus from '../../data/menus'
import Button from '../Buttons'
import Logo from '../icons/Logo'

const Navbar = () => {
  return (
    <nav className="container mx-auto mt-2 flex flex-col px-5 pt-8 lg:mt-7 lg:h-auto lg:flex-row lg:justify-between  lg:px-20">
      <a className="h-[24px] self-center" href="/">
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
              href="#"
              className="cursor-pointer rounded-xl border-2 border-primary px-4 py-[10px] text-primary transition-all hover:bg-primary hover:text-white hover:shadow-md lg:px-6 lg:py-[15px]"
            >
              Join Forum Discussion
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
