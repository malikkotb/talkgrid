import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";

export default function Post() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <Image
          className="w-10 rounded-full"
          width={64}
          height={64}
          alt="user image"
          src={"/ronaldo.png"}
          priority
        ></Image>
        <CardTitle>User Name</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          {/* TODO: get content of Post from postgres */}
          <p className="line-clamp-3">hallo malik ich bin die alba  Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post Content of Post </p>
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <p className="font-bold text-sm">
            {/* TODO: get number of comments from postgres */}
            {`0 comments`}</p>
      </CardFooter>
    </Card>
  );
}
