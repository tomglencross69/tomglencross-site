"use client"
import Link from 'next/link';
import worksData from '@/app/works/worksData';

export default function Works() {
 
  return (
    <div className='pl-4'>
      <ul>
        {worksData.map((work) => (
          <li key={work.id}>
            <Link className="text-3xl space-y-0" href={`/works/${work.urlSlug}`}>
              1.{work.id} 
              <span className={`cursor-pointer text-blueCustom dark:text-nightModeBlueCustom
                  hover:text-pinkCustom hover:dark:text-nightModePinkCustom 
                  transition-colors duration-300`}> {work.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}