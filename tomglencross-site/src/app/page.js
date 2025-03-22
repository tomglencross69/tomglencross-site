'use client'
import Image from "next/image";
import homepageImage from "@/assets/images/homePageImage1.jpg"
import BlogCard from "@/components/BlogCard"
import { useState, useEffect } from "react"
import Link from "next/link";

export default function Home() {
  
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blogposts');
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched
      }
    };
    fetchBlogPosts();
  }, []);

  if (isLoading) {
    return (
      <div>Loading...</div> // You can replace this with a more styled loading spinner or skeleton loader
    );
  }
  console.log(blogPosts[0].image_src, "image log")
  
  return (
    <>
  
        <div className="ml-4 text-center md:mt-4 ">
    {/* {console.log(blogPosts[0].image_alt_text)} */}
          <div className="text-2xl md:text-4xl text-pinkCustom bg-gradient-to-r from-pinkCustom via-nightModeBlueCustom to-pinkCustom bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent mb-4 ">
            <div>✿･.｡.: <i>LATEST POST</i>.:｡.･✿</div>
          </div>
      
      <div className="mb-5 inline-block relative z-10  ">

        <div className="absolute bg-gradient-to-r from-pinkCustom via-nightModeBlueCustom to-pinkCustom bg-[length:200%_100%] animate-gradient  w-[102%] h-[100%] z-0 shadow-md"></div>
  
       
        <div
          className="inline-block 
           bg-[#FFF5FE;] dark:bg-black transform hover:scale-105 transition-transform duration-300 ease-in-out z-10"
           
        >
  
          {blogPosts.length > 0 && (
            <div className=" w-full flex">
             
              <div className="flex items-stretch ">
                <Link href={`/blog/${blogPosts[0].blog_id}`} passHref>
                <Image
  src={blogPosts[0].image_src}
  alt={blogPosts[0].image_alt_text}
  width={150} // Specify a width for the image
  height={150} // Specify a height for the image
  className="object-cover"
  style={{width: 'auto'}}
  priority
/>
                </Link>
              </div>

              <div className={`flex-1 p-1 text-left cursor-pointer hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300`}>
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
      <div className="md:flex md:flex-col md:items-center md:pt-4">
        <div className="text-3xl md:text-4xl text-center">⚶</div>
        <div className="text-2xl md:text-4xl pt-3 pb-6 pl-4 md:text-center">Tom Glencross is an artist, writer, and dev working in the UK.</div>
     
    
        <div className="flex justify-center pl-3">
          <Image 
            alt="portrait of Tom Glencross beside some neolithic standing stones"
            src={homepageImage}
            width={300}
            height={300}
            className="intrinsic md:w-[400px] md:h-[auto] align-center "
            priority
            placeholder="blur"
          />
        </div>
        <div className="text-3xl md:text-4xl text-center pt-5 pb-5">߷</div>
        <div className="border-t-[1px] border-black dark:border-white w-full text-center pb-4"></div>
        <div className="text-xs text-center pb-5"> © MMXXV TOM GLENCROSS. REFULGET LABORES NOSTROS COELUM </div>
       
      </div>
    </>
  );
}

