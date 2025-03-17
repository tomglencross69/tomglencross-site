import Image from "next/image";
import homepageImage from "@/assets/images/homePageImage1.jpg"

export default function Home() {
  return (
    <>
    <div className="min-h-screen md:flex md:flex-col md:pt-10">
    <div className="text-3xl md:text-6xl text-center">⚶</div>
    <div className="text-2xl md:text-4xl pt-3 pb-6 md:text-center">Tom Glencross is an artist, writer and dev working in the UK. </div>
    <div className="flex justify-center">
    <Image 
    alt="portrait of Tom Glencross beside some neolithic standing stones"
    src={homepageImage}
    width={300}
    height={300}
    className="intrinsic md:w-[400] md:h-[auto]"
    priority
    placeholder="blur"/>
    </div>
    <div className="text-3xl md:text-6xl text-center pt-5 pb-5">߷</div>
    </div>
    </>
  );
}


