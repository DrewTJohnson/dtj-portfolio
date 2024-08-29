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
      '/project-images/roburritos-page.png',
      '/project-images/robs-menu.png',
      '/project-images/robs-shop.png',
      '/project-images/robs-add-to-cart.png',
      '/project-images/robs-description-related.png',
  ]

  console.log(projectImages)

  return (
    <main className="container-sm">
      <div className="flex justify-center items-center py-12 animate-fade-in delay-300">
        <img src="/tilted-logo.png" width="500" height="300" />
      </div>
        <div className="pb-12 animate-fade-in delay-300">
            <p className="pb-8">Roburritos, a popular restaurant in York and Lancaster, Pennsylvania, faced a
                significant challenge when its website was compromised by a cyberattack.
                The attack resulted in fake pages leading to scam sites, posing a serious threat to the business's
                reputation.</p>
            <p className="pb-8">In response to this issue, I undertook the task of creating a new, secure website for
                Roburritos. Recognizing the need for a robust and modern solution, I designed and developed a brand-new
                site from the ground up using a custom WordPress theme and absolutely minimal plugins.</p>
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
            <p className="pb-8">This approach not only provided a fresh and visually appealing design but also ensured
                enhanced security and functionality tailored to the needs of Roburritos. To fortify the new website
                against future attacks, I implemented several advanced security measures.</p>
            <h2 className="text-2xl text-pink-600 font-bold pb-4">These include:</h2>
            <ul className="list-disc pl-8">
                <li className="pb-4">Captchas: Integrated into forms and login pages to prevent automated bots from
                    exploiting vulnerabilities or launching brute force attacks.
                </li>
                <li className="pb-4">Wordfence: Installed as a comprehensive security plugin to offer real-time threat
                    detection, firewall protection, and detailed monitoring of potential security issues.
                </li>
                <li className="pb-4">Cloudflare: Configured to provide an additional layer of security through its web
                    application firewall, DDoS protection, and performance optimization features.
                </li>
                <li className="pb-4">HTTPS: Implemented to encrypt data transmitted between the website and its
                    visitors, ensuring secure communication and safeguarding sensitive information.
                </li>
                <li className="pb-4">User Removal: Removed old and seemingly unused SSH accounts from hosting provider
                    and reset all passwords, as well as enabled 2FA on the hosting provider.
                </li>
            </ul>
            <p>By incorporating these modern standards and security protocols, the new Roburritos website is better
                protected against threats and offers a more reliable and user-friendly experience for visitors. This
                upgrade not only addresses the issues from the previous attack but also establishes a strong foundation
                for the site's future growth and security.</p>
        </div>
    </main>
  )
}
