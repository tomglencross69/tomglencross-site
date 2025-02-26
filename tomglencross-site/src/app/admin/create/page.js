"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic";
import parse from "html-react-parser"

// import ReactQuill from "react-quill-new";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

import "react-quill-new/dist/quill.snow.css";

export default function CreateBlogPost() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("Tom Glencross");
    const [subtitle, setSubtitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageAltText, setImageAltText] = useState("");
    const [tags, setTags] = useState([]);
    const [previewContent, setPreviewContent] = useState(""); 
    const router = useRouter();

    const blog_id = 10

    const handleSubmit = async () => {
        const postData = {
            blog_id: 10,
            title,
            author,
            subtitle,
            excerpt,
            body: content,
            image_src: imageUrl, 
            image_alt_text: imageAltText,
            tags,
        };

        const response = await fetch("/api/blogposts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });

        if (response.ok) {
            alert("Your post has been successfully created!");
        } else {
            alert("Failed to create. Please try again.");
        }
    };

    const handleContentChange = (newContent) => {
        setContent(newContent);
        setPreviewContent(newContent);
    };

    return (
        <div className="max-w-4xl mx-auto p-2">
            <h1 className="text-3xl my-6"> II Create Blog Post</h1>
            <form className="space-y-4">
                <div>
                    <label className="block font-medium">Title</label>
                    <input type="text" className="w-full border rounded p-2"
                        placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required 
                    />
                </div>

                <div>
                    <label className="block font-medium">Author</label>
                    <input type="text" className="w-full border rounded p-2"
                        value={author} readOnly
                    />
                </div>

                <div>
                    <label className="block font-medium">Subtitle</label>
                    <input type="text" className="w-full border rounded p-2"
                        placeholder="Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} 
                    />
                </div>

                <div>
                    <label className="block font-medium">Excerpt</label>
                    <input type="text" className="w-full border rounded p-2"
                        placeholder="Excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} 
                    />
                </div>

                <div>
                    <label className="block font-medium">Image URL</label>
                    <input type="text" className="w-full border rounded p-2"
                        placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} 
                    />
                </div>

                <div>
                    <label className="block font-medium">Image Alt Text</label>
                    <input type="text" className="w-full border rounded p-2"
                        placeholder="Image Alt Text" value={imageAltText} onChange={(e) => setImageAltText(e.target.value)} 
                    />
                </div>

                <div>
                    <label className="block font-medium">Tags (comma separated)</label>
                    <input type="text" className="w-full border rounded p-2"
                        placeholder="Tags" value={tags.join(', ')} 
                        onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))} 
                    />
                </div>

                <div>
                    <label className="block font-medium">Content</label>
                    <ReactQuill 
                        value={content} onChange={handleContentChange}  
                        placeholder="Write the content of your blog here..." 
                        theme="snow"
                        className="bg-white border rounded"
                    />
                </div>
                {/* THE PREVIEW AREA */}
                <div className="mt-10 border rounded-lg p-5 bg-gray-100">
                    <h2 className="text-xl font-bold mb-4">Live Preview</h2>
                    <div className="border p-4 rounded bg-white shadow">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="text-xl">{`3.${blog_id}`}</span>
                            <span className="text-pinkCustom dark:nightModePinkCustom text-xl">{title || "Post Title"}</span>
                        </div>
                        {imageUrl && (
                            <img alt={imageAltText || "Blog Image"} src={imageUrl} 
                                className="w-full h-64 object-cover rounded mt-2"
                            />
                        )}
                        <div className="text-xs font-arimo uppercase mt-2">{tags.join(" / ")}</div>
                        <div className="text-xs font-arimo mt-1">{`Last updated ${new Date().toLocaleString()}`}</div>
                        <div className="text-sm mt-4">
                            by <span className="cursor-pointer text-sm hover:text-pinkCustom active:text-pinkCustom transition-colors duration-300">
                                TOM GLENCROSS
                            </span>
                        </div>
                        <div className="text-center my-4">⚶</div>
                        <div className="text-lg">{parse(previewContent) || "Start writing to see the preview..."}</div>
                        <div className="text-center my-4">߷</div>
                    </div>
                </div>

                <div>
                    <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        onClick={handleSubmit}
                    >
                        Save Post
                    </button>
                </div>
            </form>
        </div>
    );
}
