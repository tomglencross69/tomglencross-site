"use client"
import worksData from '@/app/works/worksData';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown'



export default function IndividualWorkPage({params}) {
const paramsId = useParams()
const { id } = paramsId
const individualWork = worksData.find((work) => work.urlSlug === id)

const [isModalOpen, setIsModalOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % individualWork.images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + individualWork.images.length) % individualWork.images.length
    );
  };
  
    return (
      <>
        <div>
        <div className='text-3xl'>{individualWork.title}</div>
        <div className='text-xl'><i>{individualWork.info}</i></div>
        {individualWork.images.length !== 0 ? 
          <div className='relative w-full aspect-[4/3] overflow-hidden'>
          <Image
          src={individualWork.images[0].src}
          alt={individualWork.images[0].alt}
          fill
          className='object-contain'
          priority={true}
          >  
          </Image>
          </div> : null }
        <div className='text-2xl pb-2'>
          <ReactMarkdown>{individualWork.description}</ReactMarkdown>
        </div>
        <div className='text-lg'>
          <ReactMarkdown>{individualWork.body}</ReactMarkdown>
          <div>
          <a className={`cursor-pointer pb-3
                text-pinkCustom dark:text-nightModeBlueCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`}
                href={individualWork.links[0]} 
                target="_blank">
                ⚵ {individualWork.urlSlug} <i>link</i></a>
          </div>
          </div>
        </div>
 

      {/* CLICK TO VIEW IMAGE MODAL */}
{individualWork.displayType === "imagegrid" && individualWork.images.length > 1 ? 
  <div className="grid grid-cols-3 gap-4">
      {individualWork.images.map((image, index) => (
        <div 
        key={index} 
        className="relative pb-[100%]"
        onClick={()=> openModal(index)}>
          <Image 
          key={index} 
          src={image.src} 
          alt={image.alt} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className='cursor-pointer'
          />
          </div>
      ))}
  </div>
  : null }
  {/* Modal */}
  {isModalOpen && (
        <ImageModal
          image={individualWork.images[currentImageIndex]}
          onClose={closeModal}
          onNext={goToNextImage}
          onPrev={goToPreviousImage}
        />
      )}
</>
  )
}

