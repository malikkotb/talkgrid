"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Link from "next/link";
import DeleteDialog from "./DeleteDialog";
import { useMutation } from "@tanstack/react-query";
import { error } from "console";
import axios from "axios";

type EditProps = {
  id: string;
  avatar: string;
  name: string;
  title: string;
  comments?: {
    createdAt: string;
    id: string;
    postId: string;
    title: string;
    userId: string;
  }[];
};

export default function EditPost({
  avatar,
  name,
  title,
  comments,
  id,
}: EditProps) {
  // Delete a post
  const { mutate } = useMutation(
    async (id: string) =>
      await axios.delete("/api/posts/deletePost", { data: id }),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const deletePost = () => {
    mutate(id)
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <Image
            className="w-10 rounded-full"
            width={64}
            height={64}
            alt="user image"
            src={avatar}
            priority
          ></Image>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <p className="line-clamp-3">{title}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between space-x-2">
          <Link href={`/post/${id}`}>
            <p className="text-sm cursor-pointer font-bold">
              {comments?.length} Comments
            </p>
          </Link>
          <Button
            variant="link"
            className="text-red-700 hover:no-underline font-bold"
          >
            <DeleteDialog deletePost={deletePost} /> 
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
