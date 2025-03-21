import Image from "next/image";

export default function ImageModal({image, onClose, onNext, onPrev}) {

  return (
     <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative max-w-[90%] max-h-[90%]">
        <button
          onClick={onClose}
          className="text-pinkCustom text-5xl"
        >
          x
        </button>

<div>
        <Image
          src={image.src}
          alt={image.alt}
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}
          className="mx-auto w-auto h-[500px] md:h-[600px]"
        />
        <div className="bg-black bg-opacity-30 text-white text-sm ">
          {image.alt}
        </div>
      </div>
      <div className="flex justify-between ">
    
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
