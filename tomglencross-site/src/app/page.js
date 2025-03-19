'use client'
import Image from "next/image";
import homepageImage from "@/assets/images/homePageImage1.jpg"
import BlogCard from "@/components/BlogCard"
import { useState, useEffect } from "react"

export default function Home() {

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
        const response = await fetch('/api/blogposts'); 
        const data = await response.json();
        setBlogPosts(data);  
    };
    fetchBlogPosts()
  }, []);

  return (
    <>
 <div className="md:flex md:flex-col md:items-center md:pt-4">
  <div className="text-3xl md:text-4xl text-center">⚶</div>
  <div className="text-2xl md:text-4xl pt-3 pb-6 md:text-center">Tom Glencross is an artist, writer, and dev working in the UK.</div>
  <div className="flex justify-center">
    <Image 
      alt="portrait of Tom Glencross beside some neolithic standing stones"
      src={homepageImage}
      width={300}
      height={300}
      className="intrinsic md:w-[400px] md:h-[auto]"
      priority
      placeholder="blur"
    />
  </div>
  <div className="text-3xl md:text-4xl text-center pt-5 pb-5">߷</div>
  <div className="border-t-[1px] border-black dark:border-white w-full text-center pb-4"></div>
  <div className="md:w-full flex flex-col ">
    <div className="text-3xl pb-4 text-pinkCustom bg-gradient-to-r from-pinkCustom via-nightModeBlueCustom to-pinkCustom bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent">
      <i>[Latest post]</i>
    </div>
    <div className="transform transition-all duration-300 ease-in-out scale-75 origin-top-left">
      {blogPosts.length > 0 && (
        <div className="w-full">
          <BlogCard blogPost={blogPosts[0]} isFirst={true} />
        </div>
      )}
    </div>
  </div>
</div>
    </>
  );
}


