"use client"
import worksData from '@/app/works/worksData';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import { useState } from 'react';
import { useParams } from 'next/navigation';


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
        <h1> title {individualWork.title}</h1>
        <p> description {individualWork.description}</p>
        <p> body {individualWork.body}</p>
        <p></p>
      </div>

      {/* CLICK TO VIEW IMAGE MODAL */}
{individualWork.displayType === "imagegrid" && (
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
          />
          </div>
      ))}
  </div>
  )}
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

