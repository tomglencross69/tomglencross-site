"use client"

import BlogCard from "@/components/BlogCard"
import { useState, useEffect } from "react"

export default function Blog() {

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
      <div className="flex flex-col md:flex-col md:gap-4">
       
        {blogPosts.length > 0 && (
          <div className="md:w-full md:h-[500px]  ">
            <div className=" w-full">
              <BlogCard blogPost={blogPosts[0]} isFirst={true} />
            </div>
          </div>
        )}
  
        <div className="grid md:grid-cols-3 gap-4">
          {blogPosts.slice(1).map((blogPost) => (
            <div key={blogPost.blog_id} className="md:max-w-[300px] w-full">
              <BlogCard blogPost={blogPost} isFirst={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
  }

