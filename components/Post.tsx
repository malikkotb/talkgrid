import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";

type Post = {
  avatar: string
  name: string
  id: string
  postTitle: string
  comments: any
}


export default function Post({ avatar, name, id, postTitle, comments }: Post) {
  return (
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
          <p className="line-clamp-3">{postTitle}</p>
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">

        <Link href={`/post/${id}`}>
          <p className="text-sm cursor-pointer font-bold">{comments?.length} Comments</p>
        </Link>
      </CardFooter>
    </Card>
  );
}
