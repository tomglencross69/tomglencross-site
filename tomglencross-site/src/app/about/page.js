import ContactForm from "@/components/ContactForm"

export default function page() {
  return (
    <>
    <div className="text-xl">Tom Glencross (b. 1992) is an artist and writer and developer working in Leeds, UK. <br/> Their work is concerned with the codes and myths of work and labour; folklore, social histories and their reproduction; gender, masculinities and alienation; queer and working-class experiences.</div>
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
                    href="https://soundcloud.com/mysticcrystalworm" 
                    target="_blank">
                    ⚵ soundcloud <i>link</i></a>
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
                    <ContactForm/>
                    </>

  )
}
