// "use client"

// import { useParams } from "next/navigation";
// import { useState, useEffect } from "react";

// export default async function BlogPostPage({ params }) {
//     const { id } = await params
    
//       useEffect(() => {
//         const fetchIndividualBlogPost = async () => {
//             try {
//           const response = await fetch(`/api/blogposts/${id}`); 
//           const data = await response.json();
//           setIndividualBlogPost(data);  
//           console.log(data, "<<<<<individual blog data")
//         } catch (error) {
//             console.error("Error fetching individual blog post", error)
//         }
//     }
//         fetchIndividualBlogPost()
//       }, []);

//       return (
// <>
// <div>{individualBlogPost.title}</div>
// </>
//       )
      
// }

"use client";
import { useState, useEffect } from "react";
import { use } from "react";

export default function BlogPostPage({ params }) {
  const { id } = use(params); 
  const [individualBlogPost, setIndividualBlogPost] = useState(null);

  useEffect(() => {
    const fetchIndividualBlogPost = async () => {
      try {
        const response = await fetch(`/api/blogposts/${id}`);
        const data = await response.json();
        setIndividualBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchIndividualBlogPost();
  }, [id]);

  if (!individualBlogPost) return <p>Loading...</p>;

  return (
    <div>
      <h1>{individualBlogPost.title}</h1>
      <p>{individualBlogPost.body}</p>
    </div>
  );
}