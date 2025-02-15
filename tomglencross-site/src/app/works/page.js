import Link from 'next/link';
import fakeWorksData from '@/testdata/testWorksData';

export default function Works() {
  return (
    <div>
      <h1>Works</h1>
      <ul>
        {fakeWorksData.map((work) => (
          <li key={work.id}>
            <Link href={`/works/${work.urlSlug}`}>
              {work.id} {work.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}