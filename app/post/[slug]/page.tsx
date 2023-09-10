"use client";

import axios from "axios";
import Post from "../../../components/Post";
import { useQuery } from "@tanstack/react-query";
import { PostType } from "../../types/Post";

type URL = {
  params: {
    slug: string;
  };
};

const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`)
  return response.data;
};

export default function PostDetail(url: URL) {
  const { data, isLoading } = useQuery({
    queryKey: ["detail-post"],
    queryFn: () => fetchDetails(url.params.slug), // get id of post through url.params.slug
  });

  if (isLoading)
    return (
      <div className="flex text-lg font-bold justify-center">Loading...</div>
    );
  console.log(data);

  return (
    <div>
      <Post
        id={data.id}
        name={data.user.name}
        avatar={data.user.image}
        postTitle={data.title}
        comments={data.comments}
      />
    </div>
  );
}

