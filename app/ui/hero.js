'use client'

import Image from 'next/image';
import Typewriter from './typewriter';

export default function Hero({ title, description, typewriter, speed }) {
  return (
    <section className="py-24">
      <div className="flex justify-center items-center flex-col text-center container">
      {typewriter
        ? <Typewriter text={title} speed={speed} />
        : <h1 className="text-6xl font-bold text-pink-600 mb-8">{title}</h1>
      }
        <p className="animate-fade-in delay-300 text-xl font-semibold text-white max-w-[400px]">{description}</p>
      </div>
    </section>
  )
}
