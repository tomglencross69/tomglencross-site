"use client"
import { useEffect, useState } from "react"

import React from 'react'

export default function AdminDashboard() {
    const [blogPosts, setBlogPosts] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await fetch('/api/blogposts'); 
            const data = await response.json();
            setBlogPosts(data);  
        };
        fetchBlogPosts()
      }, []);

      const handleDelete = async (blog_id) => {
        console.log(blog_id, "blog id in comments delete")
        if (confirm("Delete post?")) {
            const response = await fetch(`/api/blogposts/${blog_id}`, {method: "DELETE"})
            if (response.ok) {
              setBlogPosts(blogPosts.filter(post=> post.blog_id !== blog_id))
            } else {
              alert ('Failed to delete the post. Please try again.')
            }
        }
      }

      useEffect(() => {
        const fetchComments = async (blog_id) => {
          try {
            const response = await fetch(`/api/blogposts/${blog_id}`);
            const data = await response.json();
            setComments((prev) => ({ ...prev, [blog_id]: data.comments }));
          } catch (error) {
            console.error("Error fetching comments:", error);
          }
        };
          blogPosts.forEach((post) => {
          fetchComments(post.blog_id);
        });
      }, [blogPosts]);

    const handleDeleteComment = async (comment_id, blog_id) => {
      if (confirm("Delete comment?")) {
          const response = await fetch(`/api/comments/${comment_id}`, { method: "DELETE" });
          const data = await response.json()
          if (response.ok) {
            console.log("Delete response:", data.message)
              setComments(prev => ({
                  ...prev,
                  [blog_id]: prev[blog_id].filter(comment => comment.comment_id !== comment_id)
              }));
          } else {
              alert("Failed to delete the comment. Please try again.");
          }
      }
  }

  const handlePublishComment = async (comment_id, blog_id) => {
    const fetchCommentsForPublished = async (blog_id) => {
      try {
          const response = await fetch(`/api/blogposts/${blog_id}`);
          const data = await response.json();
          setComments((prev) => ({ ...prev, [blog_id]: data.comments }));
      } catch (error) {
          console.error("Error fetching comments:", error);
      }
  }
    const response = await fetch(`/api/comments/${comment_id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isPending: false }),
    });
    if (response.ok) {
      await fetchCommentsForPublished(blog_id);
      alert("Comment published successfully!")
    } else {
        alert("Failed to publish the comment. Please try again.");
    }
};


  return (
    <>
      <div className="text-3xl pl-2 py-2 my-3">I Blogpost Dashboard</div>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.blog_id} className="p-3 rounded-lg shadow-md">
            <div className="text-xl text-gray-800 mb-3">{post.title}</div>
            <button
              onClick={() => handleDelete(post.blog_id)}
              className="bg-red-500 text-white px-4 py-2 mr-2 rounded hover:bg-red-600 transition-colors duration-200"
            >
              DELETE POST
            </button>
            <div className="flex flex-horizontal gap-4">
              <div className="mt-4">
                <div className="mt-2 text-gray-700">
                  {comments[post.blog_id] &&
                  comments[post.blog_id].length > 0 ? (
                    comments[post.blog_id].map((comment) => (
                      <div
                        key={comment.comment_id}
                        className="border p-2 mb-2 rounded">
                          <div className="break-words">{comment.username}:</div>{" "}
                        <div className="break-all">
                          {comment.comment_text}
                        </div>
                        <div>{new Date(comment.created_at).toLocaleString()}
                        </div>
                        <button
                          onClick={() =>
                            handleDeleteComment(
                              comment.comment_id,
                              post.blog_id
                            )
                          }
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          DELETE COMMENT
                        </button>
                        {comment.ispending === true && (
                          <button
                            onClick={() =>
                              handlePublishComment(
                                comment.comment_id,
                                post.blog_id
                              )
                            }
                            className="bg-green-500 text-white px-2 py-1 ml-2 rounded hover:bg-green-600"
                          >
                            PUBLISH COMMENT
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <p>No comments yet.</p>
                  )}
                </div>
              </div>
            </div>
            <details className="mt-4">
              <summary className="text-blue-600 cursor-pointer font-medium hover:text-blue-800">
                Preview Post
              </summary>
              <div className="mt-2 text-gray-700">
                <p>{post.body}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </>
  );
}
