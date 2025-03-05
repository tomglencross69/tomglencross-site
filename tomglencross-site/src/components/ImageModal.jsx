import Image from "next/image";

export default function ImageModal({image, onClose, onNext, onPrev}) {

  return (
     <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      {/* Modal Content */}
      <div className="relative max-w-[90%] max-h-[90%]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-pinkCustom text-5xl"
        >
          x
        </button>

<div>
        {/* Full Image */}
        <Image
          src={image.src}
          alt={image.alt}
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}// Makes sure the full image is displayed without distortion
          className="mx-auto"
        />
      </div>
      <div className="flex justify-between ">
        {/* Left/Right Navigation */}
        <button
          onClick={onPrev}
          className="text-pinkCustom text-5xl"
        >
          ↞
        </button>

        <button
          onClick={onNext}
          className="text-pinkCustom text-5xl"
        >
          ↠
        </button>
        </div>
        </div>
    </div>
  );
}
