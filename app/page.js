import Image from 'next/image';
import Hero from '@/app/ui/hero';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

export default async function Home() {

  return (
    <main className="min-h-screen">
      <Hero
        title="Drew T. Johnson"
        description="Welcome to my portfolio. I'm a full stack developer based in the United States."
        typewriter
        speed={100}
      />
      <div className="animate-fade-in delay-200 mb-24">
        <div className="container-sm text-left mb-24">
          <p>I come from a marketing and design background with a focus on customer service.
          I've taken those skills and adapted them into being a highly skilled developer
          with a large focus on communication and flexibility.</p>
        </div>
        <div className="container-xs">
          <p className="mb-12 text-center">
            I have experience with a plethora of languages and frameworks,
            including but not strictly limited to:
          </p>
        </div>
        <div className="container-sm mb-24">
          <ul className="grid max-[400px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-max text-center">
            <li>
              <Link href="https://www.php.net/" className="h-full flex items-center gap-x-4 bg-gray-700/75 border-2 border-pink-100 rounded-lg px-4 py-2 interact:border-pink-500 transition-all duration-300" target="_blank">
                <Image
                  className="object-contain my-auto"
                  src="/php-logo.png"
                  alt="PHP Logo"
                  width={25}
                  height={25}
                />
                <span className="text-sm font-bold">PHP</span>
              </Link>
            </li>
            <li>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="h-full flex items-center gap-x-4 bg-gray-700/75 border-2 border-pink-100 rounded-lg px-4 py-2 interact:border-pink-500 transition-all duration-300" target="_blank">
                <Image
                  className="object-contain"
                  src="/js-logo.png"
                  alt="JavaScript Logo"
                  width={25}
                  height={25}
                />
                <span className="text-sm font-bold">JavaScript</span>
              </Link>
            </li>
            <li>
              <Link href="https://vuejs.org/" className="h-full flex items-center gap-x-4 bg-gray-700/75 border-2 border-pink-100 rounded-lg px-4 py-2 interact:border-pink-500 transition-all duration-300" target="_blank">
                <Image
                  src="/vue-logo.png"
                  alt="Vue Logo"
                  width={25}
                  height={25}
                />
                <span className="text-sm font-bold">Vue</span>
              </Link>
            </li>
              <li>
                <Link href="https://tailwindcss.com/" className="h-full flex items-center gap-x-4 bg-gray-700/75 border-2 border-pink-100 rounded-lg px-4 py-2 interact:border-pink-500 transition-all duration-300" target="_blank">
                  <Image
                    src="/tailwind-logo.svg"
                    alt="TailwindCSS Logo"
                    width={25}
                    height={25}
                  />
                  <span className="text-sm font-bold">TailwindCSS</span>
                </Link>
              </li>
              <li>
                <Link href="https://graphql.org/" className="h-full flex items-center gap-x-4 bg-gray-700/75 border-2 border-pink-100 rounded-lg px-4 py-2 interact:border-pink-500 transition-all duration-300" target="_blank">
                  <Image
                    src="/graphql-logo.svg"
                    alt="GraphQL Logo"
                    width={25}
                    height={25}
                  />
                  <span className="text-sm font-bold">GraphQL</span>
                </Link>
              </li>
              <li>
                <Link href="https://laravel.com/" className="h-full flex items-center gap-x-4 bg-gray-700/75 border-2 border-pink-100 rounded-lg px-4 py-2 interact:border-pink-500 transition-all duration-300" target="_blank">
                  <Image
                    src="/laravel-logo.svg"
                    alt="Laravel Logo"
                    width={25}
                    height={25}
                  />
                  <span className="text-sm font-bold">Laravel</span>
                </Link>
              </li>
              <li>
                <Link href="https://react.dev/" className="h-full flex items-center gap-x-4 bg-gray-700/75 border-2 border-pink-100 rounded-lg px-4 py-2 interact:border-pink-500 transition-all duration-300" target="_blank">
                  <Image
                    src="/react-logo.svg"
                    alt="React Logo"
                    width={25}
                    height={25}
                  />
                  <span className="text-sm font-bold">ReactJS</span>
                </Link>
              </li>
              <li>
                <Link href="https://nuxt.com/" className="h-full flex items-center gap-x-4 bg-gray-700/75 border-2 border-pink-100 rounded-lg px-4 py-2 interact:border-pink-500 transition-all duration-300" target="_blank">
                  <Image
                    src="/nuxt-logo.png"
                    alt="Nuxt Logo"
                    width={25}
                    height={25}
                  />
                  <span className="text-sm font-bold">Nuxt</span>
                </Link>
              </li>
          </ul>
        </div>
        <div className="container-sm">
          <p className="mb-12 text-center">
            And the following portfolio is a showcase of my ability to pick up
            new technologies quickly and adapt to the latest standards and practices.
            This portfolio is built with a combination of
            <span className="flex flex-wrap justify-center items-center gap-y-1 mt-1">
              <Link href="https://nextjs.org/" className="mx-1 text-xs inline-flex items-center justify-center gap-x-2 bg-gray-700/75 px-2 py-1 rounded-lg border-2 border-pink-100 interact:border-pink-500 transition-all duration-300">
                <Image
                  src="/nextjs-logo.svg"
                  alt="NextJS Logo"
                  width={18}
                  height={18}
                />
                <span className="font-bold">NextJS</span>
              </Link> and <Link href="https://tailwindcss.com/" className="mx-1 text-xs inline-flex items-center justify-center gap-x-2 bg-gray-700/75 px-2 py-1 rounded-lg border-2 border-pink-100 interact:border-pink-500 transition-all duration-300">
                <Image
                  src="/tailwind-logo.svg"
                  alt="TailwindCSS Logo"
                  width={18}
                  height={18}
                />
                <span className="font-bold">TailwindCSS</span>
              </Link>, and will soon be integrated with <Link href="https://supabase.com/" className="mx-1 text-xs inline-flex items-center justify-center gap-x-2 bg-gray-700/75 px-2 py-1 rounded-lg border-2 border-pink-100 interact:border-pink-500 transition-all duration-300">
                <Image
                  src="/supabase-logo.png"
                  alt="Supabase Logo"
                  width={18}
                  height={18}
                />
                <span className="font-bold">Supabase</span>
              </Link> to handle my personal authoring needs.
            </span>
          </p>
          <div className="text-right">
            <a className="flex justify-end items-center gap-x-4 text-xl font-bold uppercase text-right interact:text-pink-600 interact:gap-x-5 duration-300 transition-all"
               href="/projects">Checkout my projects
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              className="size-6">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
