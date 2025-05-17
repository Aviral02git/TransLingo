import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import "./BlogPost.css";

const blogPosts = [
    {
        id: 0,
        title: "Beyond Babel: How AI is Rewriting the Rules of Language Translation",
        date: "May 7, 2025",
        content: `Language barriers have always limited global communication. But with AI, translation has entered a new era. Modern AI tools like Google Translate and DeepL use Neural Machine Translation (NMT) to understand context, tone, and even cultural nuances — going far beyond word-for-word translations.

AI enables real-time voice translation, image-based translation, and even adapts to user preferences, making communication smoother than ever. It's not just translating words anymore — it's connecting cultures.

However, challenges like biases, low-resource languages, and the risk of over-reliance on AI still exist. With responsible use and human oversight, AI promises a future where language is no longer a barrier, but a bridge.

`,
        preview: 'From chatbots to voice assistants...',
        comments: [
            { id: 1, author: "Reader1", text: "Interesting article!" },
            { id: 2, author: "LearnerX", text: "I found this very insightful." },
        ],
    },
    {
        id: 1,
        title: "Top 5 Tips to Learn a New Language Faster",
        date: "May 6, 2025",
        content: `... (content for blog post 1) ...`,
        preview: 'Learning a new language can be exciting...',
        comments: [],
    },
    {
        id: 2,
        title: "Why Multilingual Websites are the Future of the Internet",
        date: "May 5, 2025",
        content: `Over half of the internet users are non-English speakers, making multilingual skills more valuable than ever. Whether for career growth, travel, or personal interest, learning a new language can open endless doors. Here are 5 quick tips to speed up your learning:

1. Immerse Yourself Daily
Watch movies, listen to songs, or read news in the target language. Surrounding yourself with the language boosts familiarity.

2. Practice Speaking from Day One
Don't wait to be "fluent." Start speaking early, even if it's just simple phrases. Confidence builds faster with practice.

3. Use Language Learning Apps
Apps like Duolingo, Babbel, or Memrise make learning interactive, fun, and convenient.

4. Join Language Exchange Communities
Connect with native speakers for real conversations. Platforms like Tandem or HelloTalk are great for this.

5. Set Small, Achievable Goals
Break down your learning into daily or weekly targets. Small wins keep you motivated and consistent.

Learning a language is a journey — stay curious and patient!`,
        preview: 'Over half of the internet users are non-English speakers...',
        comments: [],
    },
    {
        id: 3,
        title: "Top 5 Benefits of Using a Language Translator for Students",
        date: "May 6, 2025",
        content: `From better comprehension of study materials to breaking down language barriers, language translators are becoming essential tools for students worldwide. Here are the top 5 benefits:

Improved Understanding
Translators help students grasp complex topics in their native language, making learning easier.

Access to Global Resources
Students can explore study materials from other countries, expanding their knowledge base.

Enhanced Vocabulary & Language Skills
Regular use of translators aids in learning new words and improving language proficiency.

Boosted Confidence
Translators support students in communicating better, especially in foreign language classes.

Convenient & Time-Saving
Quick translations save time, helping students focus more on learning than decoding languages.

With AI-powered translators, students can overcome linguistic hurdles and truly enjoy the learning process.`,
        preview: 'From better comprehension of study materials...',
        comments: [],
    },
    {
        id: 4,
        title: "How Translingo Simplifies Language Translation for Web Users",
        date: "May 6, 2025",
        content: `Translingo bridges the gap between users and content, making language translation effortless for web users. Unlike traditional tools that offer plain text translation, Translingo focuses on delivering context-aware and accurate translations that feel natural and human-like.

With an easy-to-use interface and support for multiple languages, users can translate entire web pages, documents, or snippets in just a few clicks. Translingo also ensures real-time translation updates, so users get instant results without losing the meaning or tone of the original content.

By prioritizing user experience and precision, Translingo simplifies global communication, making the internet truly accessible to everyone.`,
        preview: 'Translingo bridges the gap between users and content...',
        comments: [],
    },
    {
        id: 5,
        title: "Breaking Language Barriers in Rural India",
        date: "May 7, 2025",
        content: `Many students in rural India struggle to understand English study materials. This language gap often limits their learning and access to quality education. But thanks to advancements in AI-powered translation tools, this is starting to change.

AI can now translate educational content into local languages with greater accuracy and context. Tools like Google Translate and AI chatbots are helping students learn complex subjects in their native languages, making education more inclusive.

While challenges like regional dialects and technical accuracy remain, AI-driven solutions are a huge step towards bridging the language divide and empowering rural learners.`,
        preview: 'Many students in rural India struggle to understand English study materials...',
        comments: [],
    },
    {
        id: 6,
        title: "Tips for Learning a New Language Using Tech Tools",
        date: "May 7, 2025",
        content: `... (content for blog post 6) ...`,
        preview: 'Want to learn a new language faster? Use translator apps for daily practice...',
        comments: [],
    }
];

const BlogPost = () => {
    const { id } = useParams();
    const postId = parseInt(id, 10);
    const post = blogPosts.find((p) => p.id === postId);
    const [comments, setComments] = useState(post ? post.comments : []);
    const [newComment, setNewComment] = useState({ author: "", text: "" });

    if (!post) {
        return <h2>Blog post not found.</h2>;
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewComment({ ...newComment, [name]: value });
    };

    const handleSubmitComment = (event) => {
        event.preventDefault();
        if (newComment.author.trim() && newComment.text.trim()) {
            const commentToAdd = {
                id: Date.now(), // Simple unique ID for now
                author: newComment.author,
                text: newComment.text,
            };
            setComments([...comments, commentToAdd]);
            setNewComment({ author: "", text: "" });

            // Update the blogPosts array (for this session only)
            const updatedBlogPosts = blogPosts.map(p =>
                p.id === postId ? { ...p, comments: [...p.comments, commentToAdd] } : p
            );
            // In a real application, you would send this to a backend API
            console.log("Updated Blog Posts (in memory):", updatedBlogPosts);
        } else {
            alert("Please enter both your name and comment.");
        }
    };

    return (
        <div className="blog-post-container">
            <h1>{post.title}</h1>
            <p><em>{post.date}</em></p>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

            <div className="comments-section">
                <h2>Comments</h2>
                {comments.length === 0 ? (
                    <p>No comments yet. Be the first to share your thoughts!</p>
                ) : (
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id}>
                                <strong>{comment.author}:</strong> {comment.text}
                            </li>
                        ))}
                    </ul>
                )}

                <h3>Leave a Comment</h3>
                <form onSubmit={handleSubmitComment}>
                    <div className="form-group">
                        <label htmlFor="author">Name:</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={newComment.author}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Comment:</label>
                        <textarea
                            id="text"
                            name="text"
                            rows="4"
                            value={newComment.text}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Post Comment</button>
                </form>
            </div>
        </div>
    );
};

export default BlogPost;