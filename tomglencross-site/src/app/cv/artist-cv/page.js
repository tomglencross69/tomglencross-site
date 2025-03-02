"use client"
import { useRouter } from "next/navigation"

export default function ArtistCV() {
    const router = useRouter()
  return (
    <>
    <div>
    <span onClick={(()=> router.back())} className={`text-3xl cursor-pointer text-pinkCustom dark:nightModePinkCustom`}>↞</span> 
    <div className="text-3xl pl-4 pb-2 space-y-0">
                  4.1 
                  <span className={`cursor-pointer text-pinkCustom dark:text-nightModePinkCustom
                      hover:text-pinkCustom hover:dark:text-nightModePinkCustom 
                      transition-colors duration-300`}> Artist CV</span>
                </div>
                <p className="text-2xl py-1"><i>Education</i></p>
                <div className="text-lg space-y-3">
                <p><span className="text-base">MA </span> English and Comparative Literature, Goldsmiths, University of London	<i>Distinction </i> </p>
                <p><span className="text-base">BA </span>English Literature, Goldsmiths, University of London <i>1st Class Hons, Winifred Hyde Prize for highest overall undergraduate classification</i></p>
                <p></p>
                </div>
                <p className="text-2xl py-1"><i>Selected exhibitions and works: </i></p>
                <div className="text-lg space-y-1 divide-y divide-pinkCustom">
                <p>Kneading Cultures, Konstfack (Sweden, January-February 2025)</p>
                <p> LORE, Sunnybank Mills, Leeds (UK, October-December 2024) <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModePinkCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`}
                href="https://www.sunnybankmills.co.uk/lore/tom-glencross/" 
                target="_blank">
                ⚵ the-old-stones <i>link</i></a></p>
                <p>The Most Humane, Augarten Contemporary Kyiv Biennial, Miriam Stoney, Vienna (Austria, December 2023) <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModePinkCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`}
                href="https://2023.kyivbiennial.org/en/program/reading-miriam-stoney-and-tom-glencross-otherwise-humane" 
                target="_blank">
                ⚵ the-most-humane <i>link</i></a> </p>
                <p>Indelicate 3.0, Manchester (UK, March-April 2023)</p>
                <p>Indebtedness: Die Haftung der Geschenknehmenden, Miriam Stoney, Kevin Space Gallery, Vienna (Austria, March-May 2021) <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModePinkCustom
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
                <p>Housewives – Twilight Splendour, Blank Editions Records (UK, 2019) Visual, text.</p>
                </div>
                <p className="text-2xl py-4"><i>Experience</i></p>
                <div className="text-lg space-y-1 pb-5 divide-y divide-blueCustom">
                <p>Studio Assistant – <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModePinkCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`} href="https://emiialrai.com/" target="_blank">Emii Alrai </a>(2023–)</p>
                <p>Apprentice Jeweller and Silversmith (2022–2023)</p>
                <p>Workshop Coordinator – Leeds Craft Centre and Design Gallery (2021–2022)</p>
                </div>
</div>
  </>
  )

}
