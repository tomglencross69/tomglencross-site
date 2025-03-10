import { useState, useEffect } from "react";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";  // Import the ImageModal

export default function ImageGallery({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideShowActive, setSlideShowActive] = useState(true)

  // Auto cycle through images (slideshow)
  useEffect(() => {
    let interval;
    if (slideShowActive) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 3 seconds
    }

    // Cleanup interval when component unmounts or slideshow is paused
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [slideShowActive, images.length])

  // Open the modal with the selected image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setSlideShowActive(false)
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSlideShowActive(true)
  };

  // Navigate to the next image in the modal
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image in the modal
  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-gallery">
      {/* Large Slideshow Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
          {images[currentImageIndex].alt} {/* Show text overlay */}
        </div>
      </div>

      {/* Grid of smaller images */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative pb-[100%]"
            onClick={() => openModal(index)}  // Open the modal when an image is clicked
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

      {/* Modal Component */}
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
