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
            const response = await fetch(`/api/blogposts/${blog_id}`, {method: "DELETE"})
            if (response.ok) {
              setBlogPosts(blogPosts.filter(post=> post.blog_id !== blog_id))
            } else {
              alert ('Failed to delete the post. Please try again.')
            }
        }
      }

  return (
    <>
      <div className="text-3xl mb-6">Admin Dashboard</div>
      <div className="text-2xl mb-4">Blog Posts</div>
      <div className="space-y-6">
        {blogPosts.map(post => (
          <div key={post.blog_id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-xl text-gray-800 mb-3">{post.title}</div>
            <button 
              onClick={() => handleDelete(post.blog_id)} 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
            >
              Delete
            </button>
            <details className="mt-4">
              <summary className="text-blue-600 cursor-pointer font-medium hover:text-blue-800">
                Preview
              </summary>
              <div className="mt-2 text-gray-700">
                <p>{post.body}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </>
  )
}
