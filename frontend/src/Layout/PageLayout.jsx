/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';



const PageLayout = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      atrribute: 'home',
      id: 1,
      linkto: '/',
      link: 'Home',
    },
    {
      id: 2,
      linkto: 'calender',
      link: 'Calender',
    },
    {
      id: 3,
      linkto: 'signup',
      link: 'Signup',
    },
    {
      id: 4,
      linkto: 'login',
      link: 'Login',
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-cyan-600 fixed z-50">
      <div className="text-4xl font-logo ml-2 text-white-400">
        <a href='' className=" hover:text-orange-400">Prep GCE</a>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, linkto,attribute}) => {
          return (
            <li
              id= {attribute}
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:text-orange-400  hover:scale-105 duration-200"
            >
              <Link to={linkto}>
                {' '}
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white-400">
          {links.map(({ id, link }) => {
            return (
              <li key={id} className="px-4 cursor-pointer capitalize py-6 ">
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {' '}
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
    
  )
}

export default PageLayout
