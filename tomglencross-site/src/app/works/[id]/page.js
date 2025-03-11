"use client"
import worksData from '@/app/works/worksData';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown'
import ImageGallery from '@/components/ImageGallery';
import { useRouter } from "next/navigation"



export default function IndividualWorkPage({params}) {
const paramsId = useParams()
const { id } = paramsId
const individualWork = worksData.find((work) => work.urlSlug === id)

const [isModalOpen, setIsModalOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [showPDF, setShowPDF] = useState(false)

const router = useRouter()

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
          {/* CONDITIONALLY RENDERED STUFF FOR ETC PAGE */}
            {individualWork.id !== "4" ? 
          <div>
          <a className={`cursor-pointer pb-3
                text-pinkCustom dark:text-nightModeBlueCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`}
                href={individualWork.links[0]} 
                target="_blank">
                ⚵ {individualWork.urlSlug} <i>link</i></a>
          </div> : 
          <div>
            <p className="text-lg"> For enquiries, contact details can be found at 
                <a onClick={(()=> router.push('/about'))}><span className="text-xl cursor-pointer"> 5<span className={`cursor-pointer text-blueCustom dark:text-nightModeBlueCustom
                      hover:text-pinkCustom hover:dark:text-nightModePinkCustom 
                      transition-colors duration-300`}> About</span></span></a></p>
            <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModeBlueCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`}
                href="https://instagram.com/tom.glencross" 
                target="_blank">
                ⚵ instagram <i>link</i></a>
                <p></p>
                <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModeBlueCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`}
                href="https://soundcloud.com/mysticcrystalworm" 
                target="_blank">
                ⚵ soundcloud <i>link</i></a>
                <p></p>
                <a className={`cursor-pointer
                text-pinkCustom dark:text-nightModeBlueCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300`}
                href="https://github.com/tomglencross69/" 
                target="_blank">
                ⚵ github <i>link</i></a>
          </div> }
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
       {/* Conditionally Render ImageGallery Component */}
       {individualWork.displayType === "imagegallery" && individualWork.images.length > 1 && (
         <ImageGallery images={individualWork.images} />
        )}
        {individualWork.id === "4" ? 
        <div className='pt-5 pb-10 text-xl'>Latest portfolio of my commercial, studio and artistic work available below:
          <p></p>{!showPDF ? 
          <button
          onClick={() => setShowPDF(true)}
          className='cursor-pointer text-lg px-2 bg-gray-300 hover:bg-gray-200 hover:text-pinkCustom dark:text-black dark:hover:text-pinkCustom'
          >
            ⚵ show portfolio (18MB)
          </button>  : 
          <div>
          <button
          onClick={() => setShowPDF(false)}
           className='cursor-pointer text-lg px-2 bg-gray-200 hover:text-pinkCustom dark:text-black dark:hover:text-pinkCustom'
          >
            hide portfolio ⚵
          </button>
          <iframe
          src="/pdf/portfolio-1.pdf"
          style={{ width: '100%', height: '600px', border: 'none' }}
          className='pb-10'
          >
          </iframe>
          </div>
           }
        </div>
        : null}
</>
  )
}

