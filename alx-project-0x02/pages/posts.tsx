import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      // Map the fetched posts to match PostProps
      const formattedPosts: PostProps[] = data.slice(0, 12).map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100">
      {posts.map((post, index) => (
        <PostCard key={index} title={post.title} content={post.content} userId={post.userId} />
      ))}
    </div>
  );
};

export default PostsPage;
