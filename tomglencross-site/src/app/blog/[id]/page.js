"use client";
import { useState, useEffect } from "react";
import { use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import parse from "html-react-parser"
import CommentForm from "@/components/CommentForm";

export default function BlogPostPage({ params }) {
  const { id } = use(params); 
  const [individualBlogPost, setIndividualBlogPost] = useState(null);
  const router = useRouter()

  const handleClickedBlogPostReturn = (route) => {
    router.push(route)
  }

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
  }, [id, setIndividualBlogPost]);

  if (!individualBlogPost) return <p>Loading...</p>;

  const containsHtml = (str) => /<\/?[a-z][\s\S]*>/i.test(str);
  
  const refreshComments = async () => {
    try {
      const response = await fetch(`/api/blogposts/${id}`);
      const data = await response.json();
      setIndividualBlogPost(data);
    } catch (error) {
      console.error("Error fetching blog post:", error);
    }
  };
  
  return (
    <>
    <div className="text-3xl pl-4">
        <span onClick={() => handleClickedBlogPostReturn('/blog')}className={`cursor-pointer text-pinkCustom dark:nightModePinkCustom`}>↫</span> 
        <span> 3.{individualBlogPost.blog_id}</span>
      <span className={`text-pinkCustom dark:nightModePinkCustom`}> {individualBlogPost.title}</span>
    </div>
     {/* logic removed whilst working out how to show images that come from URL sources
    {/* <Image
            alt={individualBlogPost.image_alt_text}
            src={
    individualBlogPost.image_src.startsWith("http") 
      ? individualBlogPost.image_src 
      : `/images/${individualBlogPost.image_src.replace('../assets/images/', '')}`
  }
            width={1000}
            height={1000}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            className="object-cover fill"
            priority
            /> */}
            <img
            alt={individualBlogPost.image_alt_text}
            src={
    individualBlogPost.image_src.startsWith("http") 
      ? individualBlogPost.image_src 
      : `/images/${individualBlogPost.image_src.replace('../assets/images/', '')}`
  }
            width={1000}
            height={1000}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            className="object-cover fill"
            />
    <div className="font-arimo text-xs ">{`${individualBlogPost.tags[0]} / ${individualBlogPost.tags[1]} / ${individualBlogPost.tags[2]}`.toUpperCase()}</div>
    <div className="font-arimo text-xs pb-5">
  {`Last updated ${new Date(individualBlogPost.date_added).toLocaleString()}`}
</div>
    <div className="text-xl pb-5">by <span onClick={() => {
        router.replace('/');
        setTimeout(()=>{
            window.location.reload();
        }, 100);
    }}
         className= "cursor-pointer hover:text-pinkCustom active:text-pinkCustom transition-colors duration-1000">TOM GLENCROSS</span></div>
    <div className="text-3xl text-center pb-5">⚶</div>
    <div className="text-xl">
        {containsHtml(individualBlogPost.body) ? parse(individualBlogPost.body) : individualBlogPost.body}       
    <div className="text-3xl text-center pt-5 pb-5">߷</div>
    <div className="text-xl text-center pb-5">COMMENTS</div>
    <div className="text-xl divide-y divide-pinkCustom">
        {individualBlogPost.comments.length > 0 ? (
          individualBlogPost.comments.map((comment) => (
            <div key={comment.comment_id} className="mb-2">
              {comment.ispending ? (
                <div className="animate-pulse">
                  <p className="text-gray-600 text-base font-bold">
                    {comment.username.toUpperCase()}
                  </p>
                  <p className="text-gray-500 text-sm italic flashing-text">
                    Comment pending admin approval...
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-base">
                    {comment.username.toUpperCase()}</p>
                  <p className="text-xs font-arimo">{new Date(comment.created_at).toLocaleString().slice(0,-3)}</p>
                   <p className="pl-5 text-lg break-words ">{comment.comment_text}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center">NO COMMENTS YET</p>
        )}
      </div>
      <div className="text-3xl text-center pt-2 pb-3">♃</div>
{/* HARDCODING USERID FOR NOW */}
<CommentForm blogId={id} userId={1} refreshComments={refreshComments}/>
      </div>
    </>
  );
}