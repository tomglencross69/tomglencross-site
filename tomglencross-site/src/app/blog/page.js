import BlogCard from "@/components/BlogCard"
import fakeBlogData from "@/testdata/testBlogData"

export default function Blog() {
    return (
      <>
      {fakeBlogData.map((blogPost)=> (
       <BlogCard key={blogPost.blog_id} blogPost={blogPost}/>
      ))}
      </>
    )
  }

