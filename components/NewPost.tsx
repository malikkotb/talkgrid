"use client";
// add a new post
import { useState } from "react";

export default function NewPost() {
  const [title, setTitle] = useState("");
  return (
    <form>
      <div className="flex flex-col my-4">
        <textarea
          onChange={(event) => setTitle(event.target.value)}
          name="title"
          value={title}
          placeholder="Tell the world your thoughts!"
          className="p-4 text-lg rounded-md my-2"
        ></textarea>
      </div>
    </form>
  );
}
