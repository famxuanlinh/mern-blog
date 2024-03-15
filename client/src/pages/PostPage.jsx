import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
// import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";
import { productData } from "../constants/data";

const post = {
  title: "Installing Next.js with Tailwind CSS: A Seamless Integration Guide",
  category: "nextjs",
  image:
    "https://firebasestorage.googleapis.com/v0/b/mern-blog-test-8ff4d.appspot.com/o/1708829612247-Screenshot%202023-11-22%20at%209.47.52%E2%80%AFam.png?alt=media&token=14c6f9bd-3336-4d08-ab9a-bbf3f7585514",
  createdAt: "2018-09-28T10:55:51.603Z",
  content:
    "Next.js, a popular React framework, takes front-end development to the next level by providing a streamlined and efficient development experience. When paired with Tailwind CSS, a utility-first CSS framework, you can create visually stunning and responsive web applications effortlessly. In this blog post, we ll guide you through the steps to install Next.js with Tailwind CSS for a seamless development experience.",
};

export default function PostPage() {
  //   const { postSlug } = useParams();
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(false);
  //   const [post, setPost] = useState(null);
  //   const [recentPosts, setRecentPosts] = useState(null);

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post.title}
      </h1>
      <Link
        to={`/search?category=${post.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" pill size="xs">
          {post.category}
        </Button>
      </Link>
      <img
        src={post.image}
        alt={post.title}
        className="mt-10 p-3 max-h-[600px] w-full object-cover"
      />
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        {/* <span className='italic'>
          { (post.content.length / 1000).toFixed(0)} mins read
        </span> */}
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full post-content"
        // dangerouslySetInnerHTML={{ __html:  post.content }}
      >
        {post.content}
      </div>
      <div className="max-w-4xl mx-auto w-full">
        <CallToAction />
      </div>
      {/* <CommentSection postId={post._id} /> */}

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {productData.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
