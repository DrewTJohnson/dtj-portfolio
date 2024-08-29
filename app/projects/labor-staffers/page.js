'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CenteredSlider from "@/app/ui/slider";
import { useState, useRef, useEffect } from "react";
import Slide from '@/app/ui/slide';

export default function Page() {
    const [isInViewport, setIsInViewport] = useState(false)
    const ref = useRef(null)

    const callback = (entries) => {
        const [entry] = entries
        setIsInViewport(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.75
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        if(ref.current) observer.observe(ref.current)

        return() => {
            if(ref.current) observer.unobserve(ref.current)
        }
    }, [ref, options])

    const projectImages = [
        '/project-images/labor-staffers/labor-staffers-home.png',
        '/project-images/labor-staffers/labor-staffers-home-mid.png',
        '/project-images/labor-staffers/labor-staffers-home-end.png',
        '/project-images/labor-staffers/labor-staffers-about.png',
        '/project-images/labor-staffers/labor-staffers-job-list.png',
        '/project-images/labor-staffers/labor-staffers-job-learn-more.png',
        '/project-images/labor-staffers/labor-staffers-apply.png',
        '/project-images/labor-staffers/labor-staffers-contact.png'
    ]

    console.log(projectImages)

    return (
        <main className="container-sm">
            <div className="flex justify-center items-center py-12 animate-fade-in delay-300">
                <img className="bg-stone-100/90 p-8 rounded-lg" src="/project-images/labor-staffers/labor-staffers-logo.png" width="500" height="300" />
            </div>
            <div className="pb-12 animate-fade-in delay-300">
                <p className="pb-8">Labor Staffers (LS) is a veteran owned recruiting company based in Duncansville, PA
                    focused on
                    helping potential candidates to find new employment in various companies across the United
                    States.</p>
                <p className="pb-8">LS reached out to me to express their interest in a Strapi based headless site that
                    integrates with their CRM tool RecruitCRM. The expressed frustrations with a previous develop who
                    created a Strapi site that did not work properly, and another subsequent developer that created a
                    WordPress
                    site that did not work for the client's use case.</p>
                <p className="pb-8">They were familiar with Strapi as an authoring tool and wished to move away from
                    WordPress
                    back into Strapi. Using my knowledge of GraphQL, Nuxt, and Tailwind, I created a new site from
                    scratch that was
                    free of the previous mistakes from the other developers. This particular site was very light on the
                    design side,
                    as the project was intended to be mostly about a <strong>fully working site</strong> as opposed to a
                    redesign of an existing site.</p>
                <div ref={ref}
                     className={"transition-opacity duration-300 mb-12"}>
                    <CenteredSlider className="transition-opacity duration-300">
                        {projectImages.map((img) => {
                            return (
                                <Slide>
                                    <img className="object-cover" src={img}/>
                                </Slide>
                            )
                        })}
                    </CenteredSlider>

                </div>
                <p className="pb-8">To create a reliable site that correct interfaced with the RecruitCRM platform, many
                    technical pieces had to be completed.</p>
                <h2 className="text-2xl text-pink-600 font-bold pb-4">These include:</h2>
                <h3 className="text-xl text-pink-300 font-bold pb-2">Front-end development:</h3>
                <ul className="list-disc pl-8">
                    <li className="pb-4">
                        <p><strong>Nuxt and Tailwind:</strong> A fully custom front-end build using NuxtJS version 3 and
                            serverside
                            middleware to keep queries secure and not client-side facing. This is paramount to hiding
                            API keys. Along with this, I used Tailwind for quick styling across the site, including a
                            custom <i>interact</i>
                            plugin I created at my day job to reduce the amount of classes necessary for states like
                            <i> hover:, focus:, focus-within:</i>, etc.</p>
                    </li>
                    <li className="pb-4">
                        <p><strong>GraphQL:</strong> Used to query the Strapi instance and get all of the content on
                            the site as well as a GraphQL mutation to send submissions to the general contact form to
                            Strapi.</p>
                    </li>
                    <li className="pb-4">
                        <p><strong>SendGrid API:</strong> To send emails alerting the client that they had gotten new
                            form submissions
                            and to check RecruitCRM, I leveraged the SendGrid API and Nuxt server middleware.</p>
                    </li>
                    <li className="pb-4">
                        <p><strong>Cloudflare Turnstile and Honeypot Fields:</strong> To help prevent spamming of the
                            forms from
                            bots, I implemented Cloudflare Turnstile and a honeypot field. Turnstile already blocks a
                            significant amount of bots,
                            but to help prevent unnecessary submissions, I implemented a hidden field that if filled out
                            correctly prevents
                            API requests but indicates a success message to trick bots into thinking the form submitted
                            successfully.</p>
                    </li>
                    <li className="pb-4">
                        <p><strong>REST APIs:</strong> for both RecruitCRM and SendGrid, I relied on REST APIs to make
                            external calls to services that would otherwise have needed to be written on their own.
                            When a potential applicant or company submits to LS, I'm using Nuxt server middleware to
                            submit
                            the API call to prevent client side viewing of the API key (stored in
                            a <code>.env</code> file).</p>
                    </li>
                </ul>
                <h3 className="text-xl text-pink-300 font-bold pb-2">Deployment:</h3>
                <p className="pb-4">The client already had a WordPress hosting plan on GoDaddy. While interfacing with GoDaddy regarding
                    email
                    they added additional services creating a large bill for the client. The WordPress hosting plan of
                    course did not
                    work for Strapi, so the client needed to be moved over to a VPS. I was able to jump in with a
                    GoDaddy rep, refund
                    unnecessary services, and move the client to a VPS for Strapi.</p>
                <p>After setting up the Node server and deploying Strapi to the VPS, I created a Cloudflare Pages instance for the
                 Nuxt front end of Labor Staffers. Utilizing Git and Cloudlfare Workers, I was able to setup continuous deployments
             for the site that let me deploy fixes quickly and run new GraphQl queries whenever new content is published on Strapi.</p>
            </div>
        </main>
    )
}
