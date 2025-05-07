import React, { useState } from "react";
import "./Blog.css";

const blogPosts = [
  {
    title: "How AI is Revolutionizing Language Translation",
    date: "May 7, 2025",
    content:
      "From chatbots to voice assistants, Artificial Intelligence (AI) has become a part of everyday life...",
  },
  {
    title: "Top 5 Tips to Learn a New Language Faster",
    date: "May 6, 2025",
    content:
      "Learning a new language can be exciting but challenging. Whether you're learning for school...",
  },
  {
    title: "Why Multilingual Websites are the Future of the Internet",
    date: "May 5, 2025",
    content:
      "Over half of the internet users are non-English speakers. In today's global world, having...",
  },
  {
    title: "Top 5 Benefits of Using a Language Translator for Students",
    date: "May 6, 2025",
    content:
      "From better comprehension of study materials to preparing for international exams, here’s how a simple translator tool can empower your academic journey.",
  },
  {
    title: "How Translingo Simplifies Language Translation for Web Users",
    date: "May 6, 2025",
    content:
      "Translingo bridges the gap between users and content by offering seamless translations...",
  },
  {
    title: "Breaking Language Barriers in Rural India",
    date: "May 7, 2025",
    content:
      "Many students in rural India struggle to understand English study materials. With translation tools, they can now access information in Hindi or their local language, empowering them to learn better and perform confidently. These tools are a game-changer for making education equal and accessible to all.",
  },
  {
    title: "Tips for Learning a New Language Using Tech Tools",
    date: "May 7, 2025",
    content:
      "Want to learn a new language faster? Use translator apps for daily practice, watch foreign movies with subtitles, and use flashcards for vocabulary. Combine your efforts with AI tools to translate and understand native speakers easily. Make learning a language fun, interactive, and tech-savvy!",
  },

];

const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 2 posts

  const handleSeeMore = () => {
    setVisibleCount(blogPosts.length); // Show all on click
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">TransLingo Blog</h1>
      <div className="blog-posts">
        {blogPosts.slice(0, visibleCount).map((post, index) => (
          <div key={index} className="blog-card">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>

      {visibleCount < blogPosts.length && (
        <div className="see-more-container">
          <button onClick={handleSeeMore} className="see-more-button">
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
