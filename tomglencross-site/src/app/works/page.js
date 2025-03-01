import Link from 'next/link';
import fakeWorksData from '@/testdata/testWorksData';

export default function Works() {
  return (
    <div>
      <ul>
        {fakeWorksData.map((work) => (
          <li key={work.id}>
            <Link className="pl-4 space-y-0" href={`/works/${work.urlSlug}`}>
              1.{work.id} 
              <span className={`cursor-pointer text-blueCustom dark:nightModeBlueCustom transition-colors duration-300 `}> {work.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}