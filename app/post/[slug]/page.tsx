"use client";

import axios from "axios";
import Post from "../../../components/Post";
import { useQuery } from "@tanstack/react-query";
import { PostType } from "../../types/Post";
import AddComment from "../../../components/AddComment";
import Image from "next/image";

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
      <AddComment id={data?.id} />
      { data?.comments.map((comment) => (
        <div key={comment.id} className="my-6 bg-white p-8 rounded-md">
             <div className="flex items-center gap-2">
                <Image 
                width={24}
                height={24}
                src={comment.user?.image}
                alt="profilepic" />
                <h3 className="font-bold">{comment?.user?.name}</h3>
                <h4 className="text-sm">{comment.createdAt}</h4>
             </div>
             <div className="py-4">{comment.message}</div>
        </div>
      ))}
    </div>
  );
}

