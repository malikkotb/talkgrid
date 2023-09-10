"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { UserPosts } from "../types/UserPosts";
import EditPost from "./EditPost";

const fetchUserPosts = async () => {
  const response = await axios.get("api/posts/userPosts");
  return response.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery<UserPosts>({
    queryFn: fetchUserPosts,
    queryKey: ["auth-posts"],
  });

  if (isLoading) return <div className="mt-16 flex text-lg font-bold justify-center">Your Posts are loading...</div>
  console.log(data);

  return (
    <div>
      <ul className="pt-8 gap-8 flex flex-col">
        {data?.posts.map((post) => (
          <EditPost
            key={post.id}
            id={post.id}
            avatar={data.image}
            name={data.name}
            title={post.title}
            comments={post.comments}
          />
        ))}
      </ul>
    </div>
  );
}
