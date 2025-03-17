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
      {blogPosts.map((blogPost, index)=> (
      <div key={blogPost.blog_id} className={`${
        index === 0 ? 'md:pt-6' : ''
      } md:max-w-[500px] mx-auto`}>
       <BlogCard blogPost={blogPost}/>
      </div>
      ))}
      </>
    )
  }

