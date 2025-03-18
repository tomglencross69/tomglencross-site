'use client'
import Link from "next/link"
export default function CV() {
    return (
      <>
        <div>
          <ul className="md:pt-4">
              <li>
                <Link className="text-3xl pl-4 space-y-0" href={`/cv/artist-cv`}>
                  4.1 
                  <span className={`cursor-pointer text-blueCustom dark:text-nightModeBlueCustom
                      hover:text-pinkCustom hover:dark:text-nightModePinkCustom 
                      transition-colors duration-300`}> Artist CV</span>
                </Link>
              </li>
              <li>
                <Link  className="text-3xl pl-4 space-y-0" href={`/cv/dev-cv`}>
                  4.2
                  <span className={`cursor-pointer text-blueCustom dark:text-nightModeBlueCustom
                      hover:text-pinkCustom hover:dark:text-nightModePinkCustom 
                      transition-colors duration-300`}> Dev CV</span>
                </Link>
              </li>
          </ul>
        </div>
        </>
    )
  }