"use client";
import NewPost from "../components/NewPost";

export default function Home() {
  return (
    <main>
      {/* prisma lets you communicate with any type of database using only one syntax */}
      <NewPost />
    </main>
  );
}
