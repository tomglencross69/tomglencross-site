import Image from "next/image"


export default function BlogCard({blogPost}) {

  return (
    <>
    <div className="relative h-[300px]">
    <Image
        alt={blogPost.image_alt_text}
        src={`/images/${blogPost.image_src.replace('../assets/images/', '')}`}
        layout="fill"
        className="object-cover"
        priority
        />
    </div>
    <div className="text-3xl">{blogPost.title}</div>
    <div className="text-xl pb-2">{blogPost.subtitle}</div>
    <div className="text-base pb-5">{blogPost.excerpt}</div>
    <div className="font-arimo text-xs">{`${blogPost.tags[0]} / ${blogPost.tags[1]} / ${blogPost.tags[2]}`.toUpperCase()}</div>
    <div className="font-arimo text-xs pb-10">{`Last updated ${blogPost.date_added}`}</div>
    </>
    )
}
