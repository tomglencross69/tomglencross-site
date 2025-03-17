import Image from "next/image"
import Link from "next/link"

export default function BlogCard({blogPost, isFirst}) {

  return (
    <>
    <div className="">
    <Link href={`/blog/${blogPost.blog_id}`}>
    <div className={`${isFirst ? "md:h-[400px] md:w-full" : null } md:pt-5 h-[200px]`}>
      {/* logic removed whilst working out how to show images that come from URL sources */}
    {/* <Image
        alt={blogPost.image_alt_text}
        src={`/images/${blogPost.image_src.replace('../assets/images/', '')}`}
        width={1000}
        height={1000}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        className="object-cover fill"
        priority
        /> */}
        <img
            alt={blogPost.image_alt_text}
            src={
    blogPost.image_src.startsWith("http") 
      ? blogPost.image_src 
      : `/images/${blogPost.image_src.replace('../assets/images/', '')}`
  }
            width={1000}
            height={1000}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            className="object-cover fill"
            />
    </div>
    <div className="text-3xl">{blogPost.title}</div>
    <div className="text-xl pb-2">{blogPost.subtitle}</div>
    <div className="text-base pb-5">{blogPost.excerpt}</div>
    </Link>
    <div className="font-arimo text-xs">{`${blogPost.tags[0]} / ${blogPost.tags[1]} / ${blogPost.tags[2]}`.toUpperCase()}</div>
    <div className="font-arimo text-xs ">{`Last updated ${new Date(blogPost.date_added).toLocaleString().slice(0,-3)}`}</div>
    <div className="font-arimo text-xs pb-10 ">Comments ({blogPost.comment_count || 0})</div>
    </div>
    </>
    )
}
