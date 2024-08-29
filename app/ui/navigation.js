'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline';


export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const email = 'ZHRqb2huc29uMTk5NUBnbWFpbC5jb20=';
    const form = document.getElementById('contact');
    form.setAttribute('href', 'mailto:'.concat(atob(email)));
  }, [])



  return (
    <nav className="bg-primary-500">
      <div className="flex items-center justify-between flex-wrap w-full md:container pt-0 md:pt-4 py-4">
        <div className={`relative z-20 flex items-center flex-shrink-0 rounded-br-md drop-shadow-md transition-all delay-150 duration-300 ${showMenu ? 'bg-pink-200 text-black drop-shadow-md': 'bg-transparent text-pink-200'}`}>
          <Link className="font-bold text-3xl pl-8 p-4 md:p-0" href="/">DTJ</Link>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-x-4 pr-8 md:border-r border-pink-100 py-2">
            {/* <li>
              <Link className="text-pink-200 font-semibold hover:text-pink-400 transition duration-300" href="/about">About</Link>
            </li> */}
            <li>
              <Link className="text-pink-200 font-semibold hover:text-pink-400 transition duration-300" href="/projects">Projects</Link>
            </li>
            <li>
              <Link className="text-pink-200 font-semibold hover:text-pink-400 transition duration-300" id="contact" href="">Contact</Link>
            </li>
          </ul>
          <div className="hidden md:block pl-8">
            <Link className="px-4 py-2 bg-pink-600 text-black font-bold hover:bg-pink-800 hover:text-white rounded transition-all duration-300" href="/Drew_T_Johnson_Resume.pdf" target="_blank">Resume</Link>
          </div>
        </div>
        <div className="block md:hidden pr-8">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center text-pink-200 border-pink-300 hover:text-white hover:border-white transition duration-300"
            title="Open Menu"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
          <div
            className={`absolute block top-0 bottom-0 right-0 overflow-hidden w-full min-h-screen h-screen bg-zinc-900 z-10 transition-all duration-300 ${showMenu ? 'w-full' : 'w-0'}`}
          >
            <div className="flex items-center justify-end pt-4 p-8">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className={`flex items-center text-pink-200 border-pink-300 hover:text-white hover:border-white pt-1 transition duration-150 ${showMenu ? 'opacity-1' : 'opacity-0'}`}
                title="Close Menu"
              >
                <XCircleIcon className="h-8 w-8" />
              </button>
            </div>
            <ul className={`flex flex-col min-h-screen h-screen justify-center items-center gap-4 py-2 transition-opacity duration-150 ${showMenu ? 'opacity-1' : 'opacity-0'}`}>
              {/* <li>
                <Link className="text-pink-200 font-semibold hover:text-pink-400 transition duration-300" href="/about" onClick={() => setShowMenu(!showMenu)}>About</Link>
              </li> */}
              <li>
                <Link className="text-pink-200 font-semibold hover:text-pink-400 transition duration-300" href="/projects" onClick={() => setShowMenu(!showMenu)}>Projects</Link>
              </li>
              <li>
                <Link className="text-pink-200 font-semibold hover:text-pink-400 transition duration-300" href="/contact" onClick={() => setShowMenu(!showMenu)}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
