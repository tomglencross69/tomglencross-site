import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blogPost, isFirst }) {
  return (
    <>
      <div
        className={`${
          isFirst ? "md:flex md:flex-row md:items-start md:w-full md:pt-6" : ""
        }`}
      >
        {/* Image */}
        <Link href={`/blog/${blogPost.blog_id}`} passHref>
        <div
          className={`${
            isFirst ? "md:w-full md:h-[300px] md:flex md:items-start md:overflow-hidden ": " md:w-full md:h-[100px]"
          }`}
        >
          <img
            alt={blogPost.image_alt_text}
            src={
              blogPost.image_src.startsWith("http")
                ? blogPost.image_src
                : `/images/${blogPost.image_src.replace("../assets/images/", "")}`
            }
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
            className={`object-cover w-full h-[300px] ${!isFirst ? "md:h-[100px] " : "md:object-contain "}`}
          />
        </div>
        </Link>

    
        <div
          className={`${
            isFirst ? "md:pl-6 md:w-[50%] text-left" : "md:text-left"
          }`}
        >
          <div className={`cursor-pointer hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300 `}>
          <Link href={`/blog/${blogPost.blog_id}`}>
            <div className={`text-3xl ${!isFirst && "md:text-2xl"}`}>
              {blogPost.title}
            </div>
            <div className="text-xl pb-2">{blogPost.subtitle}</div>
            <div className="text-base pb-5">{blogPost.excerpt}</div>
          </Link>
          </div>

          <div className="font-arimo text-xs">
            {`${blogPost.tags[0]} / ${blogPost.tags[1]} / ${blogPost.tags[2]}`.toUpperCase()}
          </div>
          <div className="font-arimo text-xs ">
            {`Last updated ${new Date(blogPost.date_added)
              .toLocaleString()
              .slice(0, -3)}`}
          </div>
          <div className="font-arimo text-xs pb-10 ">
            Comments ({blogPost.comment_count || 0})
          </div>
        </div>
      </div>
    </>
  );
}
