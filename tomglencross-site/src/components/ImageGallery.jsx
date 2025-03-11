import { useState, useEffect } from "react";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";  

export default function ImageGallery({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideShowActive, setSlideShowActive] = useState(true)

  useEffect(() => {
    let interval;
    if (slideShowActive) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [slideShowActive, images.length])

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setSlideShowActive(false)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSlideShowActive(true)
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-gallery">
    
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 text-white text-sm text-center ">
          {images[currentImageIndex].alt} 
        </div>
      </div>

     
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative pb-[100%]"
            onClick={() => openModal(index)} 
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ImageModal
          image={images[currentImageIndex]}
          onClose={closeModal}
          onNext={goToNextImage}
          onPrev={goToPreviousImage}
        />
      )}
    </div>
  );
}
