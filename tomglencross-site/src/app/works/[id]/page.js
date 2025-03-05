import worksData from '@/app/works/worksData';
import Image from 'next/image';

export default async function IndividualWorkPage({params}) {
const { id } = await params

cons

    const individualWork = worksData.find((work) => work.urlSlug === id)
  
    return (
      <>
        <div>
        <h1> title {individualWork.title}</h1>
        <p> description {individualWork.description}</p>
        <p> body {individualWork.body}</p>
        <p></p>
      </div>
      {/* CLICK TO VIEW IMAGE MODAL */}
{individualWork.displayType === "imagegrid" && (
  <div className="grid grid-cols-3 gap-4">
      {individualWork.images.map((image, index) => (
        <div key={index} className="relative pb-[100%]">
          <Image 
          key={index} 
          src={image.src} 
          alt={image.alt} 
          layout='fill'
          objectFit='cover'
          />
          </div>
      ))}
  </div>
)}
</>
  )
}

