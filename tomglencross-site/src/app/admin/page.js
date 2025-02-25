"use client"
import { useEffect, useState } from "react"

import React from 'react'

export default function AdminDashboard() {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await fetch('/api/blogposts'); 
            const data = await response.json();
            setBlogPosts(data);  
        };
        fetchBlogPosts()
      }, []);

      const handleDelete = async (blog_id) => {
        if (confirm("Delete post?")) {
            await fetch (`/api/blogposts/${blog_id}`, {method: "DELETE"})
            setBlogPosts(blogPosts.filter(post=> post.blog_id !== blog_id))
        }
      }

    
  return (
    <>
    <div>AdminDashboard</div>
    <div className="text-2xl">Blog Posts</div>
    {blogPosts.map(post => (
        <div key={post.blog_id}>
            <div>{post.title}</div>
            <button onClick={() => handleDelete(post.blog_id)}>Delete</button>
            <details>
            <summary>Preview</summary>
            <div>{post.body}</div>
          </details>

        </div>
    ))}
    </>
  )
}
