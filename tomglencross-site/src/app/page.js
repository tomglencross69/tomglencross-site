'use client'
import Image from "next/image";
import homepageImage from "@/assets/images/homePageImage1.jpg"
import BlogCard from "@/components/BlogCard"
import { useState, useEffect } from "react"
import Link from "next/link";

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
      </div>
  <div className="ml-4">
      {/* The red box with background behind it */}
      <div className="mb-5 inline-block relative z-10">
        {/* Background behind the box */}
        <div className="absolute bg-pinkCustom dark:bg-nightModeBlueCustom w-[101%] h-[98%] z-0"></div>
  
        {/* The lifted red box */}
        <div
          className="inline-block 
           bg-[#FFF5FE;] dark:bg-black transform hover:scale-105 transition-transform duration-300 ease-in-out z-10"
        >
          <div className="text-2xl md:text-4xl text-pinkCustom bg-gradient-to-r from-pinkCustom via-nightModeBlueCustom to-pinkCustom bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent ">
            <div>✿･.｡.: <i>LATEST POST</i>.:｡.･✿</div>
          </div>
  
          {blogPosts.length > 0 && (
            <div className=" w-full flex">
              {/* Image Container (Left Side) */}
              <div className="flex items-stretch">
                <Link href={`/blog/${blogPosts[0].blog_id}`} passHref>
                  <img
                    src={`${blogPosts[0].image_src}`}
                    alt={blogPosts[0].image_alt_text}
                    className="h-full w-auto max-w-[150px] object-cover"
                    priority="true"
                  />
                </Link>
              </div>
  
              {/* Blue Box (Inside Yellow, Aligned to Right) */}
              <div className={`flex-1 p-1 cursor-pointer hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300`}>
                <Link href={`/blog/${blogPosts[0].blog_id}`} passHref>
                  <div className="text-2xl md:text-3xl">{blogPosts[0].title}</div>
                  <div className="text-xl md:text-2xl">{blogPosts[0].subtitle}</div>
                  <div>{blogPosts[0].excerpt}</div>
                  <div>{blogPosts[0].comments}</div>
                  <div className="font-arimo text-xs md:text-s">
                    {`${blogPosts[0].tags[0]} / ${blogPosts[0].tags[1]} / ${blogPosts[0].tags[2]}`.toUpperCase()}
                  </div>
                  <div className="font-arimo text-xs md:text-s">
                    {`Last updated ${new Date(blogPosts[0].date_added)
                      .toLocaleString()
                      .slice(0, -3)}`}
                  </div>
                  <div className="font-arimo text-xs md:text-s">
                    Comments ({blogPosts[0].comment_count || 0})
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

/*
<Link href={`/blog/${blogPost.blog_id}`} passHref>
        <div
          className={`${
            isFirst ? "md:w-full md:h-[300px] md:flex md:items-start md:overflow-hidden ": " md:w-full md:h-[100px]"
          }`}
        >
          <img
            alt={blogPost.image_alt_text}
            src={
              blogPost.image_src.startsWith("http")
                ? blogPost.image_src
                : `/images/${blogPost.image_src.replace("../assets/images/", "")}`
            }
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
            className={`object-cover w-full h-[300px] ${!isFirst ? "md:h-[100px] " : "md:object-contain "}`}
          />
        </div>
        </Link>

    
        <div
          className={`${
            isFirst ? "md:pl-6 md:w-[50%] text-left" : "md:text-left"
          }`}
        >
          <div className={`cursor-pointer hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300 `}>
          <Link href={`/blog/${blogPost.blog_id}`}>
          {isFirst && pathname !== "/" && 
          <div className="text-xl text-pinkCustom md:block bg-gradient-to-r from-pinkCustom via-nightModeBlueCustom to-pinkCustom bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent"><i>[Latest post]</i></div>
        }
            <div className={`text-3xl ${!isFirst && "md:text-2xl"}`}>
              {blogPost.title}
            </div>
            <div className="text-xl pb-2">{blogPost.subtitle}</div>
            <div className="text-base pb-5">{blogPost.excerpt}</div>
          </Link>

          */