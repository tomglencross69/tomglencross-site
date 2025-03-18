"use client"
import { useRouter } from "next/navigation"

export default function ArtistCV() {
    const router = useRouter()
  return (
    <>
    <div>
    <div className="text-3xl md:text-4xl pb-2 space-y-0 md:pt-4">
                 Artist CV
                </div>
                <p className="text-2xl md:text-3xl  py-3"><i>Introduction</i></p>
          <div className="text-lg md:text-xl ">Tom Glencross (b. 1992) is an artist and writer born in Scunthorpe and working in Leeds, UK. Their work is concerned with the codes and myths of work and labour; folklore, social histories and their reproduction; gender, masculinities and alienation; queer and working-class experiences.</div>
                <p className="text-2xl py-3"><i>Selected exhibitions and works </i></p>
                <div className="text-lg md:text-xl space-y-1 divide-y divide-pinkCustom">
                <p>Kneading Cultures, Konstfack (Sweden, January-February 2025)</p>
                <p> LORE, Sunnybank Mills, Leeds (UK, October-December 2024) <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModeBlueCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`}
                href="https://www.sunnybankmills.co.uk/lore/tom-glencross/" 
                target="_blank">
                ⚵ the-old-stones <i>link</i></a></p>
                <p> Strong as Steel, 202! Visual Arts, Scunthorpe (UK, August-September 2024) </p>
                <p>The Most Humane, Augarten Contemporary Kyiv Biennial, Miriam Stoney, Vienna (Austria, December 2023) <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModeBlueCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`}
                href="https://2023.kyivbiennial.org/en/program/reading-miriam-stoney-and-tom-glencross-otherwise-humane" 
                target="_blank">
                ⚵ the-most-humane <i>link</i></a> </p>
                <p>Indelicate 3.0, Manchester (UK, March-April 2023)</p>
                <p>Indebtedness: Die Haftung der Geschenknehmenden, Miriam Stoney, Kevin Space Gallery, Vienna (Austria, March-May 2021) <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModeBlueCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`}
                href="https://www.viennaartweek.at/en/eating-your-cake-and-baking-it-anew/" 
                target="_blank">
                ⚵ indebtedness <i>link</i></a></p>
                <p>Leeds Tarot Card Project (UK, 2021)</p>
                <p>TUCWorks. Trades Union Congress (UK, 2021)</p>
                <p>Intimacy, SAH – Reel Long Overdub Records (UK, 2021)</p>
                <p>Ben Vince – Don’t Give Your Life, Thirty-Three Thirty-Three Records (UK, 2019)</p>
                <p>Jacob Samuel & Ben Vince – I’ll Stick Around, First Terrace Records (UK, 2019) </p>
                <p className="pb-3">Housewives – Twilight Splendour, Blank Editions Records (UK, 2019) Visual, text.</p>
                </div>
                <div className="border-t-[2px] border-pinkCustom w-80 text-center mx-auto"></div>
                <p className="text-2xl md:text-3xl py-3"><i>Education</i></p>
                <div className="text-lg md:text-xl space-y-3">
                <p><span className="text-base">MA </span> English and Comparative Literature, Goldsmiths, University of London	<i>Distinction </i> </p>
                <p><span className="text-base">BA </span>English Literature, Goldsmiths, University of London <i>1st Class Hons, Winifred Hyde Prize for highest overall undergraduate classification</i></p>
                <p></p>
                </div>
                <div className="border-t-[2px] border-pinkCustom w-80 text-center mx-auto"></div>
                <p className="text-2xl md:text-3xl py-3 "><i>Experience</i></p>
                <div className="text-lg md:text-xl space-y-1 pb-5 divide-y divide-blueCustom dark:divide-nightModeBlueCustom">
                <p>Studio Assistant – <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModeBlueCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom  
                transition-colors duration-300`} href="https://emiialrai.com/" target="_blank">Emii Alrai </a>(2023–)</p>
                <p>Apprentice Jeweller and Silversmith (2022–2023)</p>
                <p>Workshop Coordinator – Leeds Craft Centre and Design Gallery (2021–2022)</p>
                </div>
</div>
  </>
  )

}
