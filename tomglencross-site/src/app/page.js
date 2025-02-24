import Image from "next/image";
import homepageImage from "@/assets/images/homePageImage1.jpg"

export default function Home() {
  return (
    <>
    <div className="text-3xl text-center pb-1">⚶</div>
    <div className="text-2xl pt-4 pb-6">Tom Glencross is an artist, writer and dev working in the UK. </div>
    <div className="flex justify-center">
    <Image 
    alt="portrait of Tom Glencross beside some neolithic standing stones"
    src={homepageImage}
    width={300}
    height={300}
    className="reponsive"
    priority
    placeholder="blur"/>
    </div>
    <div className="text-3xl text-center pt-5 pb-5">߷</div>
    </>
  );
}


