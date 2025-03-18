import ContactForm from "@/components/ContactForm"
import aboutMe from "public/images/about-me.webp"
import Image from "next/image"

export default function About() {
  return (
    <>
    <div className="flex justify-center py-4">
     <Image 
        alt="portrait of Tom Glencross beside some neolithic standing stones"
        src={aboutMe}
        width={250}
        height={250}
        className="reponsive md:w-[300] md:h-[auto]"
        priority
        placeholder="blur"/>
        </div>
    <div className="text-xl md:text-2xl pb-2">Tom Glencross (b. 1992) is an artist and writer and software developer working in Leeds, UK. <br/> Their work is concerned with the codes and myths of work and labour; folklore, social histories and their reproduction; gender, masculinities and alienation; queer and working-class experiences.</div>
    <div className="md:text-xl">
    <a className={`cursor-pointer
                    text-pinkCustom dark:text-nightModeBlueCustom
                    hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                    transition-colors duration-300`}
                    href="https://instagram.com/tom.glencross" 
                    target="_blank">
                    ⚵ instagram <i>link</i></a>
                    <p></p>
                    <a className={`cursor-pointer
                    text-pinkCustom dark:text-nightModeBlueCustom
                    hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                    transition-colors duration-300`}
                    href="https://github.com/tomglencross69/" 
                    target="_blank">
                    ⚵ github <i>link</i></a>
                    <p></p>
                    <a className={`cursor-pointer
                    text-pinkCustom dark:text-nightModeBlueCustom
                    hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                    transition-colors duration-300`}
                    href="https://linkedin.com/in/tom-glencross-4760a3195" 
                    target="_blank">
                    ⚵ linkedin <i>link</i></a>
                    <p></p>
                    <a className={`cursor-pointer
                    text-pinkCustom dark:text-nightModeBlueCustom
                    hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                    transition-colors duration-300`}
                    href="https://soundcloud.com/mysticcrystalworm" 
                    target="_blank">
                    ⚵ soundcloud <i>link</i></a>
                    </div>
                    <ContactForm/>
                    </>

  )
}
