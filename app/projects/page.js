import Hero from '@/app/ui/hero';

export default function Page() {
  return (
      <main>
          <Hero
              title="Projects"
              description="I have a ton of experience building sites, here are some that highlight my skills."
          />
          <div className="container grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 grid-flow-row md:gap-10 items-center pb-14">
              <img className="animate-fade-in animation-duration-300 rounded"
                   src="/project-images/roburritos-page.png"/>
              <div className="animate-fade-in animation-duration-500 flex flex-col">
                  <h2 className="text-3xl text-pink-500 font-bold pb-4 md:pb-8">Roburritos</h2>
                  <p className="pb-8">Roburritos is an eCommerce site built with WordPress and Woocommerce.
                      The previous site was compromised and I was brought in to rebuild it from the ground up using
                      modern techniques
                      to prevent future attacks. The site features a completely custom theme and a full redesign.</p>
                  <div className="text-right">
                      <a href="/projects/roburritos"
                         className="inline-block text-right border-2 border-pink-600 bg-pink-600/25 px-4 py-2 rounded text-white font-bold transition duration-300 hover:bg-pink-600">View
                          Project</a>
                  </div>
              </div>
          </div>
          <div className="container grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 grid-flow-row md:gap-10 items-center pb-12">
              <div className="animate-fade-in animation-duration-500 flex flex-col">
                  <h2 className="text-3xl text-pink-500 font-bold pb-4 md:pb-8">Labor Staffers</h2>
                  <p className="pb-8">Labor Staffers is a job recruiting site built on headless architecture using Strapi CMS and Nuxt.
                   The previous site was built on WordPress after a previously failed Strapi build. The client wanted to return to Strapi
                  and enlisted me to build a new Strapi instance that interfaces with external APIs.</p>
                  <div className="text-right">
                      <a href="/projects/labor-staffers"
                         className="inline-block text-right border-2 border-pink-600 bg-pink-600/25 px-4 py-2 rounded text-white font-bold transition duration-300 hover:bg-pink-600">View
                          Project</a>
                  </div>
              </div>
              <img className="animate-fade-in animation-duration-300 rounded"
                   src="/project-images/labor-staffers/labor-staffers-home.png"/>
          </div>
      </main>
  )
}
