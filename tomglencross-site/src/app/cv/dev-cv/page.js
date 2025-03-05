"use client"
import { useRouter } from "next/navigation"

export default function DevCV() {
    const router = useRouter()
  return (
    <>
    <div>
    <span onClick={(()=> router.push('/cv'))} className={`text-3xl cursor-pointer text-pinkCustom dark:nightModePinkCustom`}>↞</span> 
    <div className="text-3xl pl-4 py-3 space-y-0">
                  4.2 
                  <span className={`cursor-pointer text-blueCustom dark:text-nightModeBlueCustom
                      hover:text-pinkCustom hover:dark:text-nightModePinkCustom 
                      transition-colors duration-300`}> Dev CV</span>
                </div>
                <div>
                <p className="text-2xl"><i>Introduction, Projects & Portfolio</i></p>
                <p className="pl-2 pb-3 text-lg"> Guided by experimentation and informed by elegant and accessible design principles, communicating emotions and ideas beyond form and functionality.</p>
                <p className="pl-2 pb-3 text-lg"> Current projects and links to my GitHub can be found at
                <a onClick={(()=> router.push('/dev'))}><span className="text-xl cursor-pointer"> 2<span className={`cursor-pointer text-blueCustom dark:text-nightModeBlueCustom
                      hover:text-pinkCustom hover:dark:text-nightModePinkCustom 
                      transition-colors duration-300`}> Dev</span></span></a></p>
                      <p className="pl-2 pb-3 text-lg"> Contact me 
                <a onClick={(()=> router.push('/about'))}><span className={`cursor-pointer  text-blueCustom dark:text-nightModeBlueCustom
                      hover:text-pinkCustom hover:dark:text-nightModePinkCustom 
                      transition-colors duration-300 text-kg`}> here</span></a></p>
                <div className="border-t-[2px] border-pinkCustom w-80 text-center mx-auto"></div>
                <p className="text-2xl pt-1"><i>Education</i></p>
                <div className="text-lg">
                <p className="text-sm">NORTHCODERS, LEEDS, UK</p> 
                <p className="pl-2">JavaScript Software Development Bootcamp, 2024-2025</p>
                <p className="text-sm">GOLDSMITHS, UNIVERSITY OF LONDON</p> 
                <p className="pl-2">MA English Comparative Literature</p>
                <p className="text-sm">GOLDSMITHS, UNIVERSITY OF LONDON</p> 
                <p className="pl-2 pb-3">BA English Literature</p>
                <div className="border-t-[2px] border-pinkCustom w-80 text-center mx-auto"></div>
                <p className="text-2xl pt-3"><i>Technical skills</i></p>
                <div className="text-lg space-y-1">
                <p className="text-sm">LANGUAGES</p> 
                <p className="pl-2">JavaScript (Node.js, browser-based development), HTML, CSS, SQL</p>
                <p className="text-sm">TESTING</p> 
                <p className="pl-2">Test-Driven Development (TDD), Jest, Supertest</p>
                <p className="text-sm">BACK-END DEVELOPMENT</p> 
                <p className="pl-2">SQL, PSQL, Express, Firestore, Firebase authentication</p>
                <p className="text-sm">FRONT-END DEVELOPMENT</p> 
                <p className="pl-2">HTML, CSS, React, Next.js, accessibility tools (Lighthouse), ChakraUI, Tailwind, Emotion, MotionFramer, tsParticles</p>
                <p className="text-sm">HOSTING & DEPLOYMENT</p> 
                <p className="pl-2">Supabase, Render, Netlify</p>
                <p className="text-sm">COLLABORATION AND METHODOLOGIES</p> 
                <p className="pl-2">Paired programming, agile methodologies, SCRUM, technical communication, GitHub workflow and feature/branch structures</p>
                <div className="border-t-[2px] border-pinkCustom w-80 text-center mx-auto pb-5"></div>
                </div>
               


</div>
                
</div>
    </div>
  </>
  )

}