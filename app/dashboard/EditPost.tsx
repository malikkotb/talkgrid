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
          <Button variant="link" className="text-red-700 hover:no-underline font-bold">
            
            <DeleteDialog />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
