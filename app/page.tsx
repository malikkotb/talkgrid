"use client";
import Post from "../components/Post";
import NewPost from "../components/NewPost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// fetch current posts
const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({queryFn: allPosts, queryKey: ['posts']})
  if (error) return error;
  if (isLoading) return <div className="flex text-lg font-bold justify-center">Loading...</div>
  console.log(data);
  return (
    <main>
      {/* prisma lets you communicate with any type of database using only one syntax */}
      <NewPost />
      <ul className="pt-8 gap-8 flex flex-col">
        {data?.map((post) => <Post key={post.id} name={post.user.name} avatar={post.user.image} postTitle={post.title} id={post.id} /> )}
      
      </ul>
    </main>
  );
}
