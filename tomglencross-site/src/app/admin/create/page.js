"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css'


export default function CreateBlogPost() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("Tom Glencross");
    const [subtitle, setSubtitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageAltText, setImageAltText] = useState("");
    const [tags, setTags] = useState([]);
    const [isDraft, setIsDraft] = useState(true);
    const [message, setMessage] = useState(""); 
    const router = useRouter();

    const handleSubmit = async (published) => {
        setIsDraft(!published);
        
        const postData = {
            title,
            author,
            subtitle,
            excerpt,
            body: content,
            image_src: imageUrl, 
            image_alt_text: imageAltText,
            tags,
            published
        };

        const response = await fetch("/api/blogposts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });

        if (response.ok) {
            setMessage("Successfully published!");
            alert("Your post has been successfully published!");
            router.push("/admin");
        } else {
            setMessage("Failed to publish. Please try again.");
        }
    };
    
    return (
        <div>
            <div className="text-2xl">Create Blog Post</div>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title"
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
    
                <div>
                    <label htmlFor="author">Author</label>
                    <input 
                        id="author"
                        type="text" 
                        placeholder="Author" 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} 
                        required 
                    />
                </div>
    
                <div>
                    <label htmlFor="subtitle">Subtitle</label>
                    <input 
                        id="subtitle"
                        type="text" 
                        placeholder="Subtitle" 
                        value={subtitle} 
                        onChange={(e) => setSubtitle(e.target.value)} 
                        required 
                    />
                </div>
    
                <div>
                    <label htmlFor="excerpt">Excerpt</label>
                    <input 
                        id="excerpt"
                        type="text" 
                        placeholder="Excerpt" 
                        value={excerpt} 
                        onChange={(e) => setExcerpt(e.target.value)} 
                        required 
                    />
                </div>
    
                <div>
                    <label htmlFor="imageUrl">Image URL</label>
                    <input 
                        id="imageUrl"
                        type="text" 
                        placeholder="Image URL" 
                        value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)} 
                    />
                </div>
    
                <div>
                    <label htmlFor="imageAltText">Image Alt Text</label>
                    <input 
                        id="imageAltText"
                        type="text" 
                        placeholder="Image Alt Text" 
                        value={imageAltText} 
                        onChange={(e) => setImageAltText(e.target.value)} 
                    />
                </div>
    
                <div>
                    <label htmlFor="tags">Tags (comma separated)</label>
                    <input 
                        id="tags"
                        type="text" 
                        placeholder="Tags" 
                        value={tags.join(', ')} 
                        onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))} 
                    />
                </div>
    
                <div>
                    <label htmlFor="content">Content</label>
                    <ReactQuill 
                        id="content"
                        value={content} 
                        onChange={setContent} 
                        placeholder="Write the content of your blog here..." 
                        theme="snow"
                    />
                </div>
    
                <div>
                    <button 
                        type="button" 
                        onClick={() => handleSubmit(false)}
                    >
                        Save as Draft
                    </button>
                    <div/>
    
                    <button 
                        type="button" 
                        onClick={() => handleSubmit(true)}
                    >
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
    
    }