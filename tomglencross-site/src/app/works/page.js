"use client"
import Link from 'next/link';
import fakeWorksData from '@/testdata/testWorksData';

export default function Works() {
 
  return (
    <div>
      <ul>
        {fakeWorksData.map((work) => (
          <li key={work.id}>
            <Link className="text-3xl pl-4 space-y-0" href={`/works/${work.urlSlug}`}>
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