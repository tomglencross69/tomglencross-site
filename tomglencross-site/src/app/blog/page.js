"use client"

import BlogCard from "@/components/BlogCard"
import fakeBlogData from "@/testdata/testBlogData"
import { useState, useEffect } from "react"

export default function Blog() {

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch('/api/blogposts');  // Ensure this matches the API route
      const data = await response.json();
      setBlogPosts(data);  // Set the fetched blog posts to state
      console.log(data, "<<<<<data")
    };

    fetchBlogPosts()
  }, []); // Empty dependency array means this runs once on component mount

  console.log(blogPosts, "<<<<<<<<")

 
    return (
      <>
      {fakeBlogData.map((blogPost)=> (
       <BlogCard key={blogPost.blog_id} blogPost={blogPost}/>
      ))}
      </>
    )
  }

