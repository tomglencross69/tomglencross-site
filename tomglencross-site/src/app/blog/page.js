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
      <div className="flex flex-col md:flex-row md:flex-wrap md:gap-4">
        {blogPosts.map((blogPost, index) => (
          <div
            key={blogPost.blog_id}
            className={`${
              index === 0 ? 'md:w-full md:pr-10' : 'md:max-w-[200px]'
            } `} 
          >
            <BlogCard blogPost={blogPost} isFirst={index === 0} />
          </div>
        ))}
      </div>
    </>
  );
  }

