"use client";
import NewPost from "../components/NewPost";

export default function Home() {
  return (
    <main>
      {/* prisma lets you communicate with any type of database using only one syntax */}
      <h1 className="text-3xl">TalkGrid</h1>
      <NewPost />
    </main>
  );
}
