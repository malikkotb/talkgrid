"use client";
import Post from "../components/Post";
import NewPost from "../components/NewPost";

export default function Home() {
  return (
    <main>
      {/* prisma lets you communicate with any type of database using only one syntax */}
      <NewPost />
      <ul className="pt-8 gap-8 flex flex-col">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </ul>
    </main>
  );
}
